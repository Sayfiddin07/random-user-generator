import React, {Component} from 'react'
import './RandomUser.css'
class RandomUser extends Component{
    constructor(props){
      super(props);
        this.state = {
          user: [
            {
              gender: "",
              name: {
                title: "",
                first: "",
                last: ""
              },
              location: {
                street: "",
                city: "",
                state: "",
                postcode: "",
                coordinates: {
                  latitude: null,
                  longitude: null
                },
                timezone: {
                  offset: "",
                  description: ""
                }
            },
              picture: {
              large: "",
              medium: "",
              thumbnail: ""
            },
            }
          ],
          errMsg: '',
        }
 
    }
    
    componentDidMount(){
      getRandomUser().then(user=> {
        this.setState({
          user: user.results
          
        })
      
        
    });
    
    
    async function getRandomUser() {
      try {
        const response = await fetch(`https://randomuser.me/api/`);
        return response.json();

      } catch(error) {
        console.log(error);
      }
    }
    }
  
    render(){
        console.log(this.state.user)
        const {gender, name: {title, first, last}, location, picture: {large}} =this.state.user[0]

        const dynamic_className = gender === 'male'? 'blue': 'pink'
 
        return (
        <div className="user_page">
            <div className={`user_page-card`}>
              <div className={`header ${dynamic_className} `}></div>
              <div className={`content`}>
                  <div className="image_block">
                    <img src={large} alt="userImage"/>
                  </div>
              </div>
              <div className="info">
                <h3>Hi, My name is</h3>
                <h1>{first} {' '}{last}</h1>
              </div>
            </div>
        </div>
      )
    } 
  }
  


export default RandomUser