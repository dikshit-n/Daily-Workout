import React from 'react'
import classes from './NavigationBar.css'

const Navigation = props => {

    let container = [classes.pureMenu]
    let unorderedList = [classes.pureMenuList]
    let eachListItem = [classes.pureMenuItem, classes.pureMenuSelected]

    return(
        <div className={container.join(' ')}>
            <ul className={unorderedList.join(' ')}>
                {props.links.map((child, index) => {
                    if(child.props.to !== null)
                    return <div key={index} className={eachListItem.join(' ')}>
                    {child}
                </div>
                })}
            </ul>
        </div>
    )
}

export default Navigation