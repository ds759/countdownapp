import React from 'react';

export default class Countdown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            seconds : 10,
            number: null,
            showAnswer : false
        }
    }
    componentDidMount() {
        this.generateNewQuestion();
        setInterval(() => this.tick(),1000);
    }

    tick(){
        let secondsRemaining = this.state.seconds - 1;
        if(secondsRemaining === 0){
            this.setState({
                seconds : 10,
                showAnswer : false
            });
            this.generateNewQuestion();
            
        } else if (secondsRemaining === 1) {
            this.showAnswer = true;
            this.setState({
                showAnswer : true,
                seconds : secondsRemaining
            });
        } else {
            this.setState({
                showAnswer : false,
                seconds : secondsRemaining
            });
        }
    }

    generateNewQuestion(){
        this.setState({
            number : Math.floor(Math.random() * 99) + 11 
        });
    }

    render() {
        let answer;
        if(this.state.showAnswer){
            answer = <h1>{this.state.number * this.state.number}</h1>
        }else {
            answer = <h1>???</h1>   
        }
        return(
            <>
                <h1>{this.state.number}x{this.state.number}</h1>
                <h1>Time Remaining</h1>
                <h1>{this.state.seconds}</h1>
                {answer}
            </>
        )
    }
}