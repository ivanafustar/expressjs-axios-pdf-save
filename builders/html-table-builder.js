const tableStyle = {
    'font-family': 'arial, sans-serif',
    'border-collapse': 'collapse',
    'width': '100%',
}

const tdThStyle = {
    'border': '1px solid #dddddd',
    'text-align': 'left',
    'padding':' 8px'
}


const htmlTableBuilder = (data) => {
    if (data.length === 0) {
        return null;
    }

    const thID = createElement('th', { data: 'User ID' });
    const thTitle = createElement('th', { data: 'Title' });
    const thPost = createElement('th', { data: 'Post' });

    const header = createElement('tr', { data: [thID, thTitle, thPost] });

    const body = data
        .map(post => {
            const td = createElement('td', { data: post.id, style: tdThStyle});
            const td1 = createElement('td', { data: post.title, style: tdThStyle });
            const td2 = createElement('td', { data: post.body, style: tdThStyle });

            return createElement('tr', { data: [td, td1, td2] });
        })
        .join('')

    return createElement('table', { data: [header, body], style: tableStyle });
}

const createElement = (tag, { data = '', className = '', style = '' }) => {
    let innerHtml = '';

    switch (typeof data) {
        case 'string':
        case 'number':
            innerHtml = data;
            break;

        case 'object':
            if (data instanceof Array) {
                innerHtml = data.join('');
            }
            break;

        default: innerHtml = data;
    }

    const newStyle = createStyle(style);

    return [`<${tag} class="${className}" style="${newStyle}">`, innerHtml, `</${tag}>`].join('')
}

const createStyle = (style = '') => {
    if (typeof style !== 'object') {
        return style;
    }

    return Object.entries(style)
        .map(([key, value]) => `${key} : ${value};`)
        .join(' ')
}

module.exports = htmlTableBuilder;
