import React, { Component } from 'react'
import AccountCreation from '../../Components/AccountCreation/AccountCreation';

import './AccountCreationRoute.css';

class AccountCreationRoute extends Component {
//   static defaultProps = {
//     history: {
//       push: () => {},
//     },
//   }

//   handleRegistrationSuccess = () => {
//     const { history } = this.props
//     history.push('/login')
//   }

  render() {
    return (
        <div className="new-account-form">
         <section>
            <p>
            Join us in the cruelty free kitchen!
            </p>
            <h2>Sign up</h2>
            <AccountCreation
            onRegistrationSuccess={this.handleRegistrationSuccess}
            />
        </section>
      </div>
    );
  }
}

export default AccountCreationRoute
