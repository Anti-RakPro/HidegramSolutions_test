console.log('hello')

window.addEventListener('DOMContentLoaded', (event) => {
    const data = [
        {
            id: 1,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditat m ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditat dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditatisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',
            iAmAuthor: false
        },
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur  consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elit consectetur adipm ipsum m ipsum dolor sit amet, consectetur adipisicing elitadipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},
        {id: 2, textMessage: '222 harum in libero maxime uscipit!', iAmAuthor: false},
        {id: 3, textMessage: '333', iAmAuthor: true},
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},
        {id: 3, textMessage: '333', iAmAuthor: false},
        {id: 3, textMessage: '333', iAmAuthor: false},
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},
        {id: 3, textMessage: '333', iAmAuthor: false},
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},
        {id: 3, textMessage: '333', iAmAuthor: false},
        {
            id: 1,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',
            iAmAuthor: false
        },
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},
        {id: 2, textMessage: '222 harum in libero maxime uscipit!', iAmAuthor: false},
        {id: 3,
            textMessage: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur cupiditate dolore dolorem doloremque, dolores eius enim et harum in libero maxime mollitia necessitatibus omnis quam rem sed, suscipit!',

            iAmAuthor: true},

    ];

    const content = document.getElementsByClassName('content')[0];
    console.log(content)
    // Map over the array and create HTML elements for each object
    const elements = data.map(item => {

        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const spaceBlock  = document.createElement('div');
        spaceBlock.classList.add("space-block")
        div.className = 'message-block'
        div.appendChild(div2);
        div2.className = 'message-bg'
        div2.appendChild(div3);
        div3.textContent = item.textMessage;
        div3.className = "message-text"
        const AlignMessage = () => {
            const iAmAuthor = item.iAmAuthor
            if (iAmAuthor){
                div.classList.add("right-block")
                div2.classList.add("right-bg")
                div.insertBefore(spaceBlock, div2)
            } else {
                div.appendChild(spaceBlock)
            }

        }
        AlignMessage()






        return div;
    });

    // Append the elements to the container
    elements.forEach(element => {
        // console.log(element)
        content.appendChild(element);

    });
});