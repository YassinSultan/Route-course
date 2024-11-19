var siteNameInput = document.getElementById('siteNameInput');
var siteUrlInput = document.getElementById('siteUrlInput');
var searchInput = document.getElementById('searchInput');
var dataTable = document.getElementById('dataTable');
var addBtn = document.getElementById('addBookmarkBtn');
var updateBtn = document.getElementById('updateBookmarkBtn');
var updateIndex = -1;

var dataContainer = [];
if (localStorage.getItem('data') !== null) {
    dataContainer = JSON.parse(localStorage.getItem('data'));
    displayData();
}

// -- Start Main Functions Create Update Delete Read --
function addSite() {
    if (checkValid(siteNameInput) && checkValid(siteUrlInput)) {
        var site = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value
        };
        dataContainer.push(site);
        AddLocalStorage();
        displayData();
        clearInputs();
    }
}
function updateSite() {
    if (checkValid(siteNameInput) && checkValid(siteUrlInput)) {
        dataContainer[updateIndex].siteName = siteNameInput.value;
        dataContainer[updateIndex].siteUrl = siteUrlInput.value;
        displayData();
        clearInputs();
        AddLocalStorage();
    }

}
function DeleteSite(index) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-danger ms-3",
            cancelButton: "btn btn-warning ms-3"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be delete this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            dataContainer.splice(index, 1);
            AddLocalStorage();
            displayData();
            clearInputs();
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
}
function displayData() {
    var box = "";
    for (var i = 0; i < dataContainer.length; i++) {
        box += createRow(i);
    }
    dataTable.innerHTML = box;

};

function search(e) {
    var searchValue = e.value.toLowerCase();
    var box = "";
    for (var i = 0; i < dataContainer.length; i++) {
        if (dataContainer[i].siteName.toLowerCase().includes(searchValue)) {
            box += createRow(i);
        }
    }
    dataTable.innerHTML = box;
}

// -- End Main Functions Create Update Delete Read --
// --------------------------------------------------
// -- Start Hndler Functions ------------------------
function createRow(index) {
    return `<tr>
        <td>${index + 1}</td>
        <td>${dataContainer[index].siteName}</td>
        <td><a class="btn btn-success" href="${dataContainer[index].siteUrl}" target="_blank"><i class="fa-solid fa-eye pe-2 d-none d-sm-inline-block"></i>Visit</a></td>
        <td><button onclick="updateSiteHandle(${index})" class="btn btn-warning"><i class="fa-solid fa-pen pe-2 d-none d-sm-inline-block"></i>Update</button></td>
        <td><button onclick="DeleteSite(${index})" class="btn btn-danger"><i class="fa-solid fa-trash pe-2 d-none d-sm-inline-block"></i>Delete</button></td>
    </tr>`;

}

function clearInputs() {
    siteNameInput.value = null;
    siteUrlInput.value = null;
    siteNameInput.classList.remove('is-valid', 'is-invalid');
    siteUrlInput.classList.remove('is-valid', 'is-invalid');
    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
}

function AddLocalStorage() {
    localStorage.setItem('data', JSON.stringify(dataContainer));
}

function updateSiteHandle(index) {
    clearInputs();
    updateIndex = index;
    siteNameInput.value = dataContainer[index].siteName;
    siteUrlInput.value = dataContainer[index].siteUrl;
    checkValid(siteNameInput);
    checkValid(siteUrlInput);
    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
}
function checkValid(e) {
    var regix = {
        "siteNameInput": /^.{3,}$/,
        "siteUrlInput": /^(https?:\/\/)([\w\-]+\.)+[\w\-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/
    };
    if (regix[e.id].test(e.value)) {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');
        return true;
    }
    else {
        e.classList.add('is-invalid');
        e.classList.remove('is-valid');
        return false;
    }

};

// -- End Hndler Functions --------------------------
// --------------------------------------------------
