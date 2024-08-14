import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useDarkMode } from '../contexts/AppThemeProvider';
import { DropdownMenuButton } from './dropdown';
import { FaGithub } from 'react-icons/fa';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';
import { getCurrentDayOfYear } from '../utils';

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
  }`;

interface GithubContribution {
    maxStreak: number;
    currentStreak: number;
    totalContributions: number;
    activeDays: number;
}

function GHContribution({ username, className }: { username: string, className?: string }) {
    const { darkMode } = useDarkMode();
    // Calculate the date range for the current year
    const currentYear = new Date().getFullYear();
    const [graphYear, setGraphYear] = React.useState<number>(currentYear);
    const fromDate = new Date(graphYear, 0, 1);
    const toDate = new Date(graphYear, 11, 31);
    const [contributionStats, setContributionStats] = React.useState<GithubContribution | null>(null);

    const { loading, error, data } = useQuery(GET_USER_DATA, {
        variables: {
            login: username,
            from: fromDate.toISOString(),
            to: toDate.toISOString()
        }
    });

    useEffect(() => {
        if (data && data.user) {
            const weeks = data.user.contributionsCollection.contributionCalendar.weeks;
            getContributionStats(weeks);
        }
    }, [data]);

    const getContributionStats = (weeks: any) => {

        let maxStreak = 0;
        let currentStreak = 0;
        let tempStreak = 0;
        let activeDays = 0;
        let totalContributions = 0

        const allDays = weeks.flatMap((week: any) => week.contributionDays);

        const currentDayOfYear = getCurrentDayOfYear() - 1;
        const relevantDays = allDays.slice(0, currentDayOfYear + 1);
        const reversedRelevantDays = relevantDays.reverse();

        // Calculate current streak in reverse
        for (const day of reversedRelevantDays) {
            if (day.contributionCount > 0) {
                tempStreak++;
                currentStreak = tempStreak;  // Update current streak as we go
                maxStreak = Math.max(maxStreak, tempStreak);
            } else {
                break;
            }
        }
        tempStreak = 0
        // Check for all-time max streak
        for (const day of allDays) {
            totalContributions += day.contributionCount;
            if (day.contributionCount > 0) {
                activeDays++;
                tempStreak++;
                maxStreak = Math.max(maxStreak, tempStreak);
            } else {
                tempStreak = 0;
            }
        }
        if (currentYear !== graphYear) {
            currentStreak = 0;
        }
        setContributionStats({
            maxStreak,
            currentStreak,
            totalContributions,
            activeDays
        });
    };

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

    function Stats({ label, value }: { label: string; value: string | undefined }) {
        return (
            <span className={`text-center hidden sm:block lg:text-md md:text-sm sm:text-xs ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>

                <span>
                    {label}:
                </span>
                <span className='font-bold'>{` ${value}`}</span>
            </span>
        );
    }

    // if (loading) return <p className='text-black dark:text-white'>Loading...</p>;
    if (error) return <p className='text-red-500 dark:text-red-400'>Error: {error.message}</p>;

    var weeks = [];
    if (loading) {
        weeks = [...Array(53)];
    } else {
        weeks = data.user.contributionsCollection.contributionCalendar.weeks;
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
        'Dec']

    const days = ['Mon', 'Wed', 'Fri'];
    return (
        <div className={`p-4 rounded-lg overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} ${className}`}>
            <div className='flex flex-grow justify-between '>
                <div className='flex flex-grow'>
                    <div className='flex flex-col'>
                        <div className='flex space-x-2'>
                            <p className={`text-md md:text-2xl sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Github Contributions
                            </p>
                            <DropdownMenuButton
                                onClick={setGraphYear}
                                className='text-md md:text-2xl sm:text-xl font-bold'
                                options={[currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4]}
                                selected={graphYear.toString()}
                            />
                        </div>
                        {/* <Stats label='Total Contributions' value={loading ? '' : contributionStats?.totalContributions.toString()} /> */}
                    </div>
                    <div className='flex flex-row space-x-2 mx-3 items-center mb-1'>
                        {(currentYear === graphYear) && < Stats label='Current Streak' value={loading ? '' : contributionStats?.currentStreak.toString()} />}

                        <Stats label='Max Streak' value={loading ? '' : contributionStats?.maxStreak.toString()} />
                        <Stats label='active days' value={loading ? '' : contributionStats?.activeDays.toString()} />
                        <Stats label='total Contributions' value={loading ? '' : contributionStats?.totalContributions.toString()} />
                    </div>
                </div>
                <OverlayTrigger overlay={<Tooltip id={`tip-github`}>{username}</Tooltip>}>
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none me-3"
                    >
                        <FaGithub
                            className='h-8 w-8 cursor-pointer dark:text-white' />
                    </a>
                </OverlayTrigger>
            </div>
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
                                {!loading ? (
                                    weeks.map((week: any, weekIndex: number) => (
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
                                    ))
                                )
                                    : (weeks.map((_: any, weekIndex: number) => (
                                        <div key={weekIndex} className='flex flex-col gap-1'>
                                            {[...Array(7)].map((_, dayIndex) => (
                                                <div
                                                    key={`${weekIndex}-${dayIndex}`}
                                                    className="w-2 h-2 sm:w-3 sm:h-3 xs:w-2 rounded-xs"
                                                    style={{
                                                        backgroundColor: styles[darkMode ? 'dark' : 'light'].zero,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    ))
                                    )
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GHContribution;