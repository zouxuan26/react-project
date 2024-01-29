// # /src/page/index.js

import React from 'react';
import { Button } from 'antd';

export class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Button href="https://www.baidu.com/" target="_self">Click Me!</Button>
            </div>
        );
    }
}