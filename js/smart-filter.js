(function () {
    let search_input = document.getElementById("smart-search-input");

    let name_regex = new RegExp("[A-Z]{1}[a-z]+( |-|\/|\.|\. )(([A-Z]{1}[a-z]+)|([A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+))", 'g'),
        url_regex = new RegExp('(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$', 'gm'),
        date_regex = new RegExp('(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])', 'g'),
        kafedra_regex = new RegExp("(ОіО|МЕ|ЕП|ФБСС|УБ|ІДУМ|ПРЕ|ППУА|СГН|ІППЗ|ІТМ|ІГМ|ЕІА|МТ|ХТІ)", "g"),
        institute_regex = new RegExp("(ННЕІ|ННІУБО|ЮФ|ФІТ|ННТІ)", "g"),
        science_degree_regex = new RegExp("(DSc|PhD|MA|BA|Not)", "g"),
        gender_regex = new RegExp("(Ч|Ж)", "g");





    function define_search_parameters(array) {

        let checkboxes = {
            name: document.getElementById("filter-name"),
            orcId: document.getElementById("filter-orcId"),
            date: document.getElementById("filter-date"),
            kafedra: document.getElementById("filter-kafedra"),
            institute: document.getElementById("filter-institute"),
            science_degree: document.getElementById("filter-science_degree"),
            gender: document.getElementById("filter-gender")
        };

        array.forEach((array_value, i) => {
            if (name_regex.test(array_value)) {
                checkboxes.name.checked = true;
            } else {
                checkboxes.name.checked = false;
            }

            if (url_regex.test(array_value)) {
                checkboxes.orcId.checked = true;
            } else {
                checkboxes.orcId.checked = false;
            }

            if (date_regex.test(array_value)) {
                checkboxes.date.checked = true;
            } else {
                checkboxes.date.checked = false;
            }

            if (kafedra_regex.test(array_value)) {
                checkboxes.kafedra.checked = true;
            } else {
                checkboxes.kafedra.checked = false;
            }

            if (institute_regex.test(array_value)) {
                checkboxes.institute.checked = true;
            } else {
                checkboxes.institute.checked = false;
            }

            if (science_degree_regex.test(array_value)) {
                checkboxes.science_degree.checked = true;
            } else {
                checkboxes.science_degree.checked = false;
            }

            if (gender_regex.test(array_value)) {
                checkboxes.gender.checked = true;
            } else {
                checkboxes.gender.checked = false;
            }

        });
    }

    search_input.addEventListener('input', function () {
        define_search_parameters(this.value.trim().split(","));
        console.log(document.querySelectorAll("[data-filter]:checked"));
    });
})();