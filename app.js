
let usersWord = ""
    let evenList = document.getElementById("even")
    let oddList = document.getElementById("odd")

    function handleSubmit() {
        let newListItem = document.createElement('LI')
        newListItem.innerText = usersWord

        
        if (usersWord.length % 2 === 0) {
            evenList.appendChild(newListItem)
        } else {
            oddList.appendChild(newListItem)
        }

        usersWord = ""
        document.getElementById("even-odd-form").reset()
    }



    function updateWord(element) {
    usersWord = element.value

    console.log(usersWord)
    }