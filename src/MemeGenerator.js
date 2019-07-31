import React, {Component} from 'react'

class  MemeGenerator extends Component{
    constructor() {
        super()
        this.state={
            topText: "",
            buttonText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=> response.json()) 
            .then(response=> {
                const {memes} =  response.data
                this.setState ({allMemeImgs: memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const ranNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const ranMemeImg = this.state.allMemeImgs[ranNum].url
        this.setState({
            randomImg: ranMemeImg
        })
    }

    render(){
        return(
            <div>
                <form className="Meme-Form" onSubmit={this.handleSubmit}>
                    <input 
                        type= "text"
                        name= "topText"
                        placeholder= "Top Text"
                        value= {this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type= "text"
                        name= "buttonText"
                        placeholder= "Button Text"
                        value= {this.state.buttonText}
                        onChange={this.handleChange}
                    />  
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="button">{this.state.buttonText}</h2>
                </div>
            </div>
        )
    } 
}

export default MemeGenerator 