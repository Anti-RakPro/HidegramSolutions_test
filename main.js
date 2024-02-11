window.addEventListener('DOMContentLoaded', (event) => {
    const data = [
        {
            id: 1,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditat m ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditat dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditatisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',
            iAmAuthor: false
        },
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur  consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elitadipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },
        {id: 2, textMessage: '222 harum in libero maxime uscipit!', iAmAuthor: false},
        {id: 3, textMessage: '333', iAmAuthor: true},
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },
        {id: 3, textMessage: '333', iAmAuthor: false},
        {id: 3, textMessage: '333', iAmAuthor: false},
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },
        {id: 3, textMessage: '333', iAmAuthor: false},
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },
        {id: 3, textMessage: '333', iAmAuthor: false},
        {
            id: 1,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',
            iAmAuthor: false
        },
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },
        {id: 2, textMessage: '222 harum in libero maxime uscipit!', iAmAuthor: false},
        {
            id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true
        },

    ];
    const content = document.getElementsByClassName('content')[0];

    const elements = data.map(item => {
        const listElement = document.createElement('div');
        const innerElement = document.createElement('div');
        const text = document.createElement('span');
        const spaceBlock = document.createElement('div');
        spaceBlock.classList.add("space-block")
        listElement.className = 'message-block'
        listElement.appendChild(innerElement);
        innerElement.className = 'message-bg'
        innerElement.appendChild(text);
        text.textContent = item.textMessage;
        text.className = "message-text"
        const AlignMessage = () => {
            const iAmAuthor = item.iAmAuthor
            if (iAmAuthor) {
                listElement.classList.add("right-block")
                innerElement.classList.add("right-bg")
                listElement.insertBefore(spaceBlock, innerElement)
            } else {
                listElement.appendChild(spaceBlock)
            }

        }
        AlignMessage()

        return listElement;
    });

    elements.forEach(element => {
        content.appendChild(element);

    });
});