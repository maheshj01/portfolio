import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useDarkMode } from '../contexts/AppThemeProvider';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DropdownMenuButton } from './dropdown';

const GET_USER_DATA = gql`
  query GetUserData($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      email
      createdAt
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              weekday
              date
              contributionCount
              color
            }
          }
          months {
            name
            year
            firstDay
            totalWeeks
          }
        }
      }
    }
  }
`;

const themeStyles = {
    light: {
        background: "bg-gradient-to-r from-blue-100 to-teal-100",
        text: "text-gray-800"
    },
    dark: {
        background: "bg-gradient-to-r from-gray-900 to-gray-800",
        text: "text-gray-100"
    }
};


function GHContribution({ username }: { username: string }) {
    const { darkMode } = useDarkMode();
    // Calculate the date range for the current year
    const currentYear = new Date().getFullYear();
    const [graphYear, setGraphYear] = React.useState<number>(currentYear);
    const fromDate = new Date(graphYear, 0, 1);
    const toDate = new Date(graphYear, 11, 31);

    const { loading, error, data } = useQuery(GET_USER_DATA, {
        variables: {
            login: username,
            from: fromDate.toISOString(),
            to: toDate.toISOString()
        }
    });

    const styles = {
        dark: {
            zero: 'rgba(255,255,255,0.1)',
        },
        light: {
            zero: 'rgba(0,0,0,0.1)',
        }
    }
    function getContributionColor(count: number, day: any) {
        if (count === 0) {
            return styles[darkMode ? 'dark' : 'light'].zero;
        }
        return day.color;
    }

    function YearSelect() {
        return (
            <DropdownButton
                style={{
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    fontSize: '20px'
                }}
                title={graphYear}>
                {/* last 5 years */}
                {[...Array(5)].map((_, i) => {
                    const year = currentYear - i;
                    return (
                        <Dropdown.Item
                            className='w-20 text-center'
                            style={{ fontSize: '20px' }}
                            key={year} onClick={() => setGraphYear(year)}>
                            {year}
                        </Dropdown.Item>
                    );
                })}
            </DropdownButton>
        );
    }


    function DayContribution(props: { day: any, weekIndex: number, dayIndex: number }) {
        const { day, weekIndex, dayIndex } = props;
        return (
            <div
                key={`${weekIndex}-${dayIndex}`}
                className="w-2 h-2 sm:w-3 sm:h-3 xs:w-2 rounded-xs"
                style={{
                    backgroundColor: getContributionColor(day.contributionCount, day),
                    // border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                }}
                title={`${day.date}: ${day.contributionCount} contributions`}
            />
        );
    }

    if (loading) return <p className='text-black dark:text-white'>Loading...</p>;
    if (error) return <p className='text-red-500 dark:text-red-400'>Error: {error.message}</p>;

    const weeks = data.user.contributionsCollection.contributionCalendar.weeks;

    return (
        <div className={`p-4 rounded-lg overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className='flex flex-grow space-x-2'>
                <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Github Contributions
                </h2>
                <DropdownMenuButton
                    onClick={setGraphYear}
                    options={[currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4]}
                    selected={graphYear.toString()}
                />
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                Total Contributions: {data.user.contributionsCollection.contributionCalendar.totalContributions}
            </p>
            <div className='w-full overflow-x-auto'>
                <div className='inline-block w-full pr-2'>
                    {(
                        <div className='flex gap-1 rounded-md overflow-x-auto p-2'>
                            {weeks.map((week: any, weekIndex: number) => (
                                <div key={weekIndex} className='flex flex-col gap-1'>
                                    {week.contributionDays.map((day: any, dayIndex: number) => (
                                        <DayContribution
                                            key={`${weekIndex}-${dayIndex}`}
                                            day={day}
                                            weekIndex={weekIndex}
                                            dayIndex={dayIndex}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GHContribution;