class ElementsHtml {

    static getMessage(message) {
        return `
                <div class="card col-md-12">
                    <div class="card-body">
                        <h5 class="card-title">${message.author}</h5>
                        <p class="card-text">${message.content}</p>
                    </div>
                </div>
                <br/>`;
    }

    static getRoom(room) {
        return `<a href="#" id=${room._id} data-room='true'>${room.name}</a>`;
    }

    static getAlertMessage(configure) {
        return ` 
            <div class="alert alert-${configure.alert}" data-alert="true">
                <strong>${configure.title}</strong> ${configure.subtitle}
            </div>`
    }
}