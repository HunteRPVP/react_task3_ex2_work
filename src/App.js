//import logo from './logo.svg';
//import './App.css';
import { DatePicker } from "@blueprintjs/datetime";
import { Cell, Column, Table } from "@blueprintjs/table";

const modifiers = { isSunday };

function isSunday(date) {
  return date.getDay() === 0;
}

const dataSource = {
  headers: {
    artist: "Артисты",
    album: "Альбомы",
    song: "Песни",
    duration: "Длительность песни"
  },
  rows: [
    {
      artist: "Skillet",
      album: "Rise",
      song: "Fire and Fury",
      duration: new Date().getMinutes().toLocaleString().charAt(0) + ":" + new Date().getSeconds()
    },
    {
      artist: "RHCP",
      album: "Dark necessities",
      song: "Dark necessities",
      duration: (new Date().getMinutes() + 1).toLocaleString().charAt(0) + ":" + new Date().getSeconds()
    },
    {
      artist: "Guns N’ Roses",
      album: "Appetite for Destruction",
      song: "Welcome to the Jungle",
      duration: (new Date().getMinutes() + 2).toLocaleString().charAt(0) + ":" + new Date().getSeconds()
    }
  ]
}

const cellRenderer = (name) => (rowIndex) => {
  return <Cell>{dataSource.rows[rowIndex][name]}</Cell>
};

function App() {
  return (
    <div className="App">
      <DatePicker
        defaultValue={new Date()}
        modifiers={modifiers}
        timePickerProps={{ showArrowButtons: true }}
      />

      <Table numRows={dataSource.rows.length}>
        <Column name={dataSource.headers.artist} cellRenderer={cellRenderer("artist")} />
        <Column name={dataSource.headers.album} cellRenderer={cellRenderer("album")} />
        <Column name={dataSource.headers.song} cellRenderer={cellRenderer("song")} />
        <Column name={dataSource.headers.duration} cellRenderer={cellRenderer("duration")} />
      </Table>
    </div>
  );
}

export default App;
