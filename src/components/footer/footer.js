import React, {PureComponent} from 'react'
import * as css from './footer.module.scss'

class footer extends PureComponent {
    render() {
        return (
            <div className={css.footer}>
                Konrad Sobolewski 2019 &copy; All rights reserved
            </div>
        )
    }
}

export default footer;