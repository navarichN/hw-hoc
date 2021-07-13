import React, {useState} from 'react';

function DateTime(props) {
    
return (
        <p className="date">{props.date}</p>
    )
}

function dateConversion(date) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let dateYear = date.slice(0,4);
    let dateMonth = date.slice(6,7);
    let dateDay = Number(date.slice(8,9)) === 0 ? date.slice(9,10) : date.slice(8,10);
    let dateHour = Number(date.slice(11,12)) === 0 ? date.slice(12,13) : date.slice(11,13);
    let dateMinutes = date.slice(14,16)
    if(year > Number(dateYear)) return 'Прошло больше года'
    else if(year === Number(dateYear) && month > Number(dateMonth)) return 'Прошло больше месяца'
    else if(year === Number(dateYear) && month === Number(dateMonth) && day === Number(dateDay) && hour > Number(dateHour)) {
        let quantityOfHours = hour - Number(dateHour);
        return `Прошло ${quantityOfHours} часов`
    }
    else if(year === Number(dateYear) && month === Number(dateMonth) && day > Number(dateDay)) return 'Прошло больше суток'
    else if(year === Number(dateYear) && month === Number(dateMonth) && day === Number(dateDay) && hour === Number(dateHour) && minutes > Number(dateMinutes)) return `Прошло ${minutes - Number(dateMinutes)} минут`
}

function DateTimePretty(props) {
    return <props.Component date={dateConversion(props.date)}/>
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty Component ={DateTime} date ={props.date}/>
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-07-05 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-07-13 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-07-13 18:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}