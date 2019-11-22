
function fetch(){
    let user = document.querySelector('input').value;
    // console.log(data);
    let text = 'Visit Profile'
    $.ajax({
        type:'GET',
        url:'https://api.github.com/users/'+user+'?client_id=Iv1.27d23b109a50754c&client_secret=82015423e2a368c16cb2fbf9f6290d9fe8c77f70',
        success:function(response){
            let name = response.name || `Name is not available`
            let bio = response.bio || 'Bio is not available'
            console.log(response)
            function component(){
                return(
                    `

                    <div class="container">
                    <div class="row">
            
                        <div class="col-sm-3 pt-1" style="border:2px solid white;border-radius:5px;margin-bottom:40px">

                        <img src=${response.avatar_url} width="100%" alt="User's Images"/>
                        <h5 class="mt-2 text-white">
                               Username:&nbsp; ${response.login}
                            </h5>

                        </div>
                        <div class="col-sm-4" style="border:2px solid white;border-radius:5px;margin-bottom:40px">

                            
                            <p class="text-white mt-3">
                                Name:&nbsp;${name}
                            </p>

                            <p class="text-white mt-3">
                                Bio:&nbsp;${bio}
                            </p>
                            
                            
                            <p class="text-white mt-3">
                               Repos:&nbsp; ${response.public_repos}&nbsp;&nbsp;<button class="btn btn-outline-danger"><a href="http://github.com/${user}/repositories">Get Repositories</a></button>
                            </p>
                            <p class="text-white mt-3">
                               Followers:&nbsp; ${response.followers}&nbsp;&nbsp;<button class="btn btn-outline-danger"><a href="http://github.com/${user}/followers">Get Followers</a></button>
                             </p>
                             
                             <p class="text-white mt-3">
                               Following:&nbsp; ${response.following}&nbsp;&nbsp;<button class="btn btn-outline-danger"><a href="http://github.com/${user}/following">Get Following</a></button>
                            </p>
                          
                            <br>
                            </div>
                            <div class="col-sm-5 d-flex p-3" style="border:2px solid white;border-radius:5px;margin-bottom:40px">
                            <div >                      
                            <button class=" btn btn-mat text-white" style="margin-top:100px">
                                ${text.link(`${response.html_url}`)}
                        </button>
                        </div>
                        <div class="ml-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_ADgdpn_jOSfr450lnKUQYpHkvY-gTx0i5UaLiEyQlTozimzwQ&s">
                        </div>
                        </div>
                        </div>
                        </div>
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