import React,{PureComponent} from 'react'
import * as css from './footer.module.scss'
class footer extends PureComponent {
    render () {
        return (
            <div className={css.container}>
                <div className={css.footer}>
                    Konrad Sobolewski &#x24D2; 2019
                </div>
            </div>
        )
    }
}

export default footer;