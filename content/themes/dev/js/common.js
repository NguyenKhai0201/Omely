function Search_District_Click() {
    var numberOfItem = $('.head-search-box .district-row select option').length;
    var provinceId = $('.head-search-box .province-row select').val();
    if (provinceId != 0 && numberOfItem < 2) {
        LoadDictrict(provinceId);
    }
}