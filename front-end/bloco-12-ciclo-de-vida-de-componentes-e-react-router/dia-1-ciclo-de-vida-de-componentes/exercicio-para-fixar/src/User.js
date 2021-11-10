import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [],
      loading: true,
    }
  }

  fetchUser = () => {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          person: data.results,
        })
      })
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate() {
    console.log(this.state.person[0].dob.age)
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.person[0].dob.age > 50) {
      return false
    }

    return true;
  }

  render() {
    const { person, loading } = this.state;

    return (
      <div>
        {
          loading ? <div>Loading...</div> : person.map((currentPerson, index) => (
            <div key={index}>
              <p>{`${currentPerson.name.first} ${currentPerson.name.last}`}</p>
              <p>{currentPerson.email}</p>
              <p>{currentPerson.dob.age}</p>
              <img src={currentPerson.picture.medium} alt={currentPerson.name.first} />
            </div>
          ))
        }
        {/* <p>{person.picture.medium}</p> */}
        {/* <img src={person.picture.medium} alt={person.name.first}></img> */}
      </div>
    );
  }
}