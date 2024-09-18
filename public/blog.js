document.addEventListener('DOMContentLoaded', function() {

    const createBlogForm = document.getElementById('createBlog.form');

    const errorMessage = document.getElementById('errorMessage');
    
    if(createBlogForm) {

        createBlogForm.addEventListener('submit', async function (event) {

            event.preventDefault();
    
            const title = document.getElementById('blogTitle').value.trim();

            const description = document.getElementById('blogDescription').value.trim();
    
            try {

                const response = await fetch('/dashboard', {

                    method: postMessage,
                    headers: {
                        'Content-Type': 'applcation/json',
                    },
                    body: JSON.stringify({title, description}),
                });
    
                const data = await response.json();
    
                if(response.ok) {

                    alert(data.message);
                    window.location.href = '/dashboard';
                } else {

                    throw new Error (data.message || 'Failed to create');
                }
            } catch (error) {

                console.log('Error', error);
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('d-none');
            }
        });
    } else {

        console.log('Blog not found')
    }
    });

    document.addEventListener('DOMContentLoaded', function() {

        const deleteButton = document.querySelectorAll('.deleteBlog');
        deleteButton.forEach(button => {

            console.log('Registering delete button', button);

            button.addEventListener('click', handleDeleteBlog);
        });

        const editButton = document.querySelectorAll('.editBlogBtn');

        editButton.forEach(button => {

            button.addEventListener('click', toggleEditBlog);
        });

        const editForm = document.querySelectorAll('editBlogForm');

        editForm.forEach(button => {

            form.addEventListener('submit', handleEditBlog);
        });

        const cancelEditButton = document.querySelectorAll('.cancelEdit');

        cancelEditButton.forEach(button =>{

            console.log('Registering cancel edit button', button);

            button.addEventListener('click', toggleEditForm);
        });
    });

    