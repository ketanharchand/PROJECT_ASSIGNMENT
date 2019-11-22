
function fetch(){
    let user = document.querySelector('input').value;
    // console.log(data);
    let text = 'Visit Profile'
    $.ajax({
        type:'GET',
        url:'https:api.github.com/users/'+user+'?client_id=Iv1.27d23b109a50754c&client_secret=82015423e2a368c16cb2fbf9f6290d9fe8c77f70',
        success:function(response){
            let name = response.name || `Name is not available`
            let bio = response.bio || 'Bio is not available'
            console.log(response)
            function component(){
                return(
                    `

                    <div class="card my-3" style="width:18rem">
            
                        <div class="card-body">

                        <img src=${response.avatar_url} width="100%" alt="User's Images"/>

                            <h5 class="card-title mt-2">
                               Username:&nbsp; ${response.login}
                            </h5>

                            <p class="card-text mt-3">
                                Name:&nbsp;${name}
                            </p>

                            <p class="card-text mt-3">
                                Bio:&nbsp;${bio}
                            </p>
                            
                            
                            <p class="card-text mt-3">
                               Repos:&nbsp; ${response.public_repos}&nbsp;&nbsp;<button=class="btn btn-danger"><a href="http://github.com/${user}/repositories">Get Repositories</a></button>
                            </p>
                            <p class="card-text mt-3">
                               Followers:&nbsp; ${response.followers}&nbsp;&nbsp;<button=class="btn btn-danger"><a href="http://github.com/${user}/followers">Get Followers</a></button>
                             </p>
                             
                             <p class="card-text mt-3">
                               Following:&nbsp; ${response.following}&nbsp;&nbsp;<button=class="btn btn-danger"><a href="http://github.com/${user}/following">Get Following</a></button>
                            </p>
                          
                            <br>
                            
                        <button class="mt-2 btn btn-mat text-white">
                                ${text.link(`${response.html_url}`)}
                        </button>
                        </div>
                    </div>
                    `
                )
            }

            document.getElementById('data').innerHTML = component();
            document.querySelector('img').innerHTML = ''
        }
    })
}
