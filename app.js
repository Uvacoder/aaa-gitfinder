let github = new Github();
let ui = new UI();

let findUser = document.getElementById('findUser');


findUser.addEventListener('keyup', e => {
    let userText = e.target.value;
    // console.log(userText);
    if (userText != '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        ui.clearProfile();
    }
})