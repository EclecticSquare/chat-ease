import React, { Component } from 'react';
import axios from 'axios'
import Background from './images/news.jpg'
import randnum from 'random-number-between'
import './css/news.css'
import Menu from './menu.js'






class News extends Component {
    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        
        this.state = {
             newsTitle: [],
             newsSummary: []
        }
    }
   

    componentDidMount() {
       this.getNews()
        
    }

    updateHandler = () => {
        this.getNews()
            
     }

     getNews = () => {
        const key = 'ba3db1d153d84fe385b66276373849c3';
        
        var rand = randnum(1, 20, 1);
        console.log(rand);

        axios({
            method:'get',
            url: 'https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge,bbc-news,abc-news,cnn&apiKey=' + key,
            
        }).then(({data}) => {
            var title =[];
            var description =[];
            title.push(data.articles[rand].title)
            description.push(data.articles[rand].description)
        
            this.setState({newsTitle: title, newsSummary: description})
            console.log(this.state.newsTitle)
            console.log(this.state.newsSummary)
         });
     }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }



    render() {
        return(
            <div className='backgroundImage'>
                <img src={ Background } className='introImage' alt="tabloid Magazines" />
                
                <h1 className='textNews'>{this.state.newsTitle}</h1>
                    <h3 className='textNews'>{this.state.newsSummary}</h3>
                <button type="button" className="btn btn-outline-primary" onClick={this.updateHandler}>Try Again</button>

                
                <Menu />
            </div>
            
            
           
        )
    }
}





export default News;