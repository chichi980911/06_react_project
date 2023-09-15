
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [movie, setmovie] = useState(Data);

  const count = useRef(4);

  const navigate = useNavigate();

  const oncreate = (a) => {
    a.id = count.current
    count.current += 1;
    setmovie([...movie, a])
    navigate('/')

  }
  const ondelete = (a) => {
    const newmovie = movie.filter((it) => it.id !== a);
    setmovie(newmovie);
  }


  return (
    <div className="App">
      <div>
        <Link to={'/'}>List    /</Link>
        <Link to={'/insert'}> Add New Movie</Link>
      </div>


      <Routes>
        <Route path='/' element={<Main ondelete={ondelete} movie={movie} ></Main>} />
        <Route path='/insert' element={<InsertMovie oncreate={oncreate}></InsertMovie>} />
      </Routes>
    </div>
  );
}

export default App;

const Main = ({ ondelete, movie }) => {
  return (
    <div>
      <h1>Movies</h1>
      <table className='movie-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movie.map(function (it) {
            return (
              <MovieList key={it.id} {...it} ondelete={ondelete}></MovieList>
            )
          })}
        </tbody>
      </table>
    </div>

  )

}

const MovieList = ({ id, title, genre, createdate, ondelete }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{createdate}</td>
      <td><button onClick={() => {
        ondelete(id);
      }}>Delete</button></td>
    </tr>

  )
}


const Data = () => {
  return (
    [
      {
        id: 1,
        title: "Movie1",
        genre: "Drama",
        createdate: "2022-01-01",
      },
      {
        id: 2,
        title: "Movie2",
        genre: "Action",
        createdate: "2022-02-01",
      },
      {
        id: 3,
        title: "Movie3",
        genre: "Comedy",
        createdate: "2022-03-01",
      },
    ]

  )
}


const InsertMovie = ({ oncreate }) => {
  const movie = { id: 0, title: "", genre: "", createdate: "" }
  return (<div>
    <h1>Create Movie</h1>
    <div><input placeholder='input movie id'
      onChange={(e) => { movie.id = e.target.value }}
    /></div>
    <div><input placeholder='input movie title'
      onChange={(e) => { movie.title = e.target.value }}
    /></div>
    <div><input placeholder='input movie genre'
      onChange={(e) => { movie.genre = e.target.value }}
    /></div>
    <div>출시일:<input type='date'
      onChange={(e) => { movie.createdate = e.target.value }}
    /></div>
    <div><button onClick={(e) => {




      oncreate(movie);


    }}>Add Movie</button></div>
  </div>
  )
}

