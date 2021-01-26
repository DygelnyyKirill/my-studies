    const xhr = new XMLHttpRequest();

            xhr.open("POST", "https://localhost:3000/auth/login");
            xhr.send(formData);
            xhr.addEventListener("load", function () {
                if (xhr.status == 200) {
                    console.log(xhr.response);
                } else {
                    console.error("error");
                }
            })
