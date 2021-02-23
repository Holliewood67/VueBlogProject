Vue.component('blog-post', {
    props: ['blogpost'],
    template: `        
    <div id="singleBlogPost">
        <h2>{{ blogpost.title }}</h2>
        <h3>{{ blogpost.username }}</h3>
        <h2>{{ blogpost.date }}</h2>
        <p>{{ blogpost.content }}</p>
    </div>`
});

var blogVue = new Vue({
    el: '#blogPosts',
    data: {
        posts: [
            {title: 'First Post',
            username: 'User1',
            date: 'Feb 20, 2021',
            content: 'This is the content of my very interesting blog post!'},
            {title: 'Second Post',
            username: 'User1',
            date: 'Feb 20, 2021',
            content: 'This is the content of an even BETTER blog post!'}
        ]
    }
});

var postBlogVue = new Vue({
    el: '#blogPostCreation',
    data: {
        title: '',
        username: '',
        date: '',
        content: ''
    },
    methods: {
        publishPost: function() {
            var postData = {
                title: this.title,
                username: this.username,
                date: this.date,
                content: this.content
            }
            blogVue.posts.push(postData);

            this.title = '';
            this.username = '';
            this.date = '';
            this.content = '';
        }
    }
})