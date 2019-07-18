import React,{PureComponent} from 'react'
import * as css from './footer.module.scss'
class footer extends PureComponent {
    render () {
        return (
            <div className={css.container}>
                <div className={css.footer}>
                    Konrad Sobolewski 2019 &#x24D2; All rights reserved
                </div>
            </div>
        )
    }
}

export default footer;