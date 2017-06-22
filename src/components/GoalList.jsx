import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        console.log("Individual Goals ared ",goal.val())
        const { email, title } = goal.val();
        console.log("Goals key is  ",goal.key)
        const serverKey = goal.key;
        //Adding it to the array which was declared to store the values
        goals.push({ email, title, serverKey });
      })
      this.props.setGoals(goals);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.goals.map((goal, index) => {
            return (
              <GoalItem key={index} goal={goal} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
