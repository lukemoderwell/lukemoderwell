import React from 'react';
import marked from 'marked';

export default class Markdown extends React.Component {
    constructor(props) {
        super(props);

        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: true
        });
    }

    render() {
        const {content} = this.props;
        const parsed = marked(content); 
        return (
            <div className="bodyText" dangerouslySetInnerHTML={{__html:parsed}} />
        )
    }
}
