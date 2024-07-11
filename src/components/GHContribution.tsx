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

function GHContribution({ username, className }: { username: string, className?: string }) {
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

    function DayContribution(props: { day: any, weekIndex: number, dayIndex: number }) {
        const { day, weekIndex, dayIndex } = props;
        return (
            <div
                key={`${weekIndex}-${dayIndex}`}
                className="w-2 h-2 sm:w-3 sm:h-3 xs:w-2 rounded-xs"
                style={{
                    backgroundColor: getContributionColor(day.contributionCount, day),
                }}
                title={`${day.date}: ${day.contributionCount} contributions`}
            />
        );
    }

    if (loading) return <p className='text-black dark:text-white'>Loading...</p>;
    if (error) return <p className='text-red-500 dark:text-red-400'>Error: {error.message}</p>;

    const weeks = data.user.contributionsCollection.contributionCalendar.weeks;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
        'Dec']

    const days = ['Mon', 'Wed', 'Fri'];
    return (
        <div className={`p-4 rounded-lg overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} ${className}`}>
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
            <p className={`mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                Total Contributions: {data.user.contributionsCollection.contributionCalendar.totalContributions}
            </p>
            <div className='flex items-center'>
                <div className='flex flex-col gap-1 lg:mt-5 md:mt-4 sm: xs:mt-2 text-xs sm:text-lg'>
                    {days.map((day, index) => (
                        <div key={index} className='w-10 text-xs sm:text-lg dark:text-white'>
                            {day}
                        </div>
                    ))}
                </div>

                <div className='w-full overflow-x-auto'>
                    <div className='inline-block w-full pr-2'>
                        <div className='pl-2 flex gap-8 sm:gap-10 md:gap-10 lg:gap-8'>
                            {months.map((month, index) => (
                                <div key={index} className='w-10 text-xs sm:text-lg dark:text-white'>
                                    {month}
                                </div>
                            ))}
                        </div>
                        {(
                            <div className='flex gap-1 rounded-md p-2'>
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
        </div>
    );
}

export default GHContribution;