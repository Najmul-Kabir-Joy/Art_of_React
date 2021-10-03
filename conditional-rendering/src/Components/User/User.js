import React from 'react';
import Player from '../Player/Player';
import Teacher from '../Teacher/Teacher';

const User = (props) => {
    const { familiar } = props;
    //option 1 - element variable
    let greeting;
    if (familiar) {
        greeting = <h5>Hello bro. wass up?</h5>
    } else {
        greeting = <h5>Do i know you?</h5>
    }
    //option 2 - ternary operator using
    // let greeting = familiar ? <h5>Hello bro. wass up?</h5> : <h5>Do i know you?</h5>;
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {familiar ? <h5>Cholo biri khai</h5> : <h5>Jao mara khao</h5>}
            </div>
            <div>
                <h2>Profession</h2>
                {
                    familiar ? <Teacher></Teacher> : <Player></Player>
                }
                {
                    familiar ?
                        <div>
                            <p>Kothay achis?</p>
                            <p>Ki kortesis?</p>
                            <p>basay ay ekdin</p>
                        </div>
                        :
                        <div>
                            <p>Koi thaken?</p>
                            <p>ekhane ki chan?</p>
                            <p>age baran</p>
                        </div>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar
                    &&
                    <div>
                        <p>Number de tor</p>
                        <p>fb te ki active na nki</p>
                    </div>
                }
                {
                    familiar
                    &&
                    <div>
                        <Player></Player>
                    </div>
                }
            </div>
            <div>
                <h2>Share drink</h2>
                {
                    familiar
                    ||
                    <div>
                        <p>ohon ami din e raite matal hoia ghuri</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default User;