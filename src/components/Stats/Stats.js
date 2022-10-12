import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Stats = () => {
    const chartData = useLoaderData();
    const { data } = chartData;
    // console.log(data);
    return (
        <div>
            <h2 className='mt-5 mb-4'>Numbers of Question</h2>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
                <ResponsiveContainer>
                    <BarChart className='' width={450} height={300} data={data}>
                        <Bar dataKey="total" fill="#0275d8" />
                        <XAxis dataKey={"name"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default Stats;