angular.module("d.Filters").run(["$templateCache", function($templateCache) {$templateCache.put("action-box.tpl.html","<div class=\"btn-group\">\n	<button class=\"btn btn-default btn-{{size}} dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"false\" bs-drop-down>\n		<span class=\"glyphicon glyphicon-{{icon}}\" aria-hidden=\"true\"></span> <span ng-bind=\"label\"></span> <span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu\" role=\"menu\" ng-transclude></ul>\n</div>\n");
$templateCache.put("action.add-item.tpl.html","<li>\n    <a href=\"\" ng-click=\"savm.selectAll()\"><i class=\"glyphicon glyphicon-plus\"></i> Add item</a>\n</li>");
$templateCache.put("action.delete-items.tpl.html","<li>\n    <a href=\"\" ng-click=\"vm.deleteItems()\"><i class=\"glyphicon glyphicon-remove\"></i> Delete</a>\n</li>");
$templateCache.put("action.select-all.tpl.html","<li>\n    <a href=\"\" ng-click=\"savm.selectAll()\">Select All</a>\n</li>");
$templateCache.put("action.select-inverse.tpl.html","<li>\n    <a href=\"\" ng-click=\"sivm.selectInverse()\">Select Inverse</a>\n</li>");
$templateCache.put("action.select-none.tpl.html","<li>\n    <a href=\"\" ng-click=\"snvm.selectNone()\">Select None</a>\n</li>");
$templateCache.put("custom-filters.tpl.html","<form role=\"form\" class=\"row d-filters\" ng-transclude></form>\n");
$templateCache.put("filters.tpl.html","<form role=\"form\" class=\"row d-filters\">\n    <div ng-repeat=\"field in $filters.$fields()\" ng-switch=\"field.type\">\n        <div ng-switch-when=\"text\" class=\"form-group col-xs-{{field.size[0]}} col-sm-{{field.size[1]}} col-md-{{field.size[2]}} col-lg-{{field.size[3]}} d-filters__text-field\">\n            <label for=\"{{field.ngModel}}\">{{field.label}}</label>\n            <input type=\"text\" name=\"{{field.ngModel}}\" class=\"form-control\" ng-model=\"$filters.$model[field.ngModel]\"\n                ng-model-options=\"{ updateOn: \'default blur\', debounce: {\'default\': 500, \'blur\': 0} }\" />\n        </div>\n        <div ng-switch-when=\"select\" class=\"form-group col-xs-{{field.size[0]}} col-sm-{{field.size[1]}} col-md-{{field.size[2]}} col-lg-{{field.size[3]}} d-filters__select-box\">\n            <label for=\"{{field.ngModel}}\">{{field.label}}</label>\n            <select name=\"{{field.ngModel}}\" class=\"form-control\" ng-model=\"$filters.$model[field.ngModel]\" ng-options=\"option.key as option.value for option in field.ngOptions\">\n            </select>\n        </div>\n        <div ng-switch-when=\"checkbox\" class=\"checkbox col-xs-{{field.size[0]}} col-sm-{{field.size[1]}} col-md-{{field.size[2]}} col-lg-{{field.size[3]}} d-filters__checkbox\">\n            <label>\n                <input type=\"checkbox\" ng-model=\"$filters.$model[field.ngModel]\"/>{{field.label}}\n            </label>\n        </div>\n        <div ng-switch-when=\"selectize\" class=\"col-xs-{{field.size[0]}} col-sm-{{field.size[1]}} col-md-{{field.size[2]}} col-lg-{{field.size[3]}} d-filters__selectize\">\n            <label for=\"{{field.ngModel}}\">{{field.label}}</label>\n            <selectize ng-model=\"$filters.$model[field.ngModel]\" config=\"field.config\"></selectize>\n        </div>\n        <div ng-switch-when=\"datePicker\" class=\"col-xs-{{field.size[0]}} col-sm-{{field.size[1]}} col-md-{{field.size[2]}} col-lg-{{field.size[3]}} d-filters__date-picker\">\n            <label for=\"{{field.ngModel}}\">{{field.label}}</label>\n            <input type=\"text\" class=\"form-control\" model=\"$filters.$model[field.ngModel]\" date-picker editable/>\n        </div>\n    </div>\n    <button ng-if=\"!$filters.autoSubmit\" class=\"btn btn-primary d-filters__submit\" ng-click=\"$filters.submit()\">Submit</button>\n</form>\n");
$templateCache.put("edit-input.tpl.html","<div class=\"form-group\">\n    <select ng-if=\"vm.setup.type === \'select\'\" ng-model=\"vm.editValue\" ng-options=\"option for option in vm.selectDataOptions\" class=\"form-control\">\n    </select>\n    <input ng-if=\"vm.setup.type !== \'select\'\" type=\"text\" class=\"form-control\" ng-model=\"vm.editValue\">\n</div>");
$templateCache.put("edit-mode-button.tpl.html","<span class=\"pull-right\">\n    <button class=\"btn btn-{{size}} btn-primary\" ng-if=\"!$parent.$list.$edit\" type=\"button\" ng-click=\"vm.changeEditMode()\">\n        <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> \n        <span>Edit</span>\n    </button>\n    \n    <button class=\"btn btn-{{size}} btn-success\" ng-if=\"$parent.$list.$edit\" type=\"button\" ng-click=\"vm.saveEditData()\">\n        <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> \n        <span>Save</span>\n    </button>\n    \n    <button class=\"btn btn-{{size}} btn-default\" ng-if=\"$parent.$list.$edit\" type=\"button\" ng-click=\"vm.cancelEditData()\">\n        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> \n        <span>Cancel</span>\n    </button>\n</span>");
$templateCache.put("list.tpl.html","<div class=\"d-list\">\n    <div ng-transclude class=\"d-list__multi-actions\"></div>\n    <table ng-if=\"!responsiveMode\" class=\"d-list-table\">\n        <thead class=\"d-list-table__headers\" ng-if=\"$list.$setup.enable.header\">\n            <tr>\n                <th class=\"d-list-table__header\" ng-if=\"$list.$setup.enable.checkboxes\"></th>\n                <th class=\"d-list-table__header\" ng-repeat=\"header in $list.$headers\">\n                    <a href=\"\" ng-if=\"$list.headerIsSortable(header)\" ng-click=\"$list.sortBy(header)\" class=\"d-list-table__header-sortable\">\n                        {{$list.getHeaderLabel(header) | capitalize}}\n                        <i ng-if=\"$list.$sort.by === header\" class=\"glyphicon\" ng-class=\"{\'glyphicon-chevron-down\': $list.$sort.order === \'desc\', \'glyphicon-chevron-up\': $list.$sort.order === \'asc\'}\" style=\"font-size: 10px; margin: 4px 0 0 4px\"></i>\n                    </a>\n                    <span ng-if=\"!$list.headerIsSortable(header)\">\n                        {{$list.getHeaderLabel(header) | capitalize}}\n                    </span>\n                </th>\n            </tr>\n        </thead>\n        <tfoot class=\"d-list-table__footer\" ng-if=\"$list.$setup.enable.footer\">\n        </tfoot>\n        <tbody class=\"d-list-table__body\">\n            <tr ng-repeat=\"element in $list.$elements\" class=\"d-list-table__body-row\">\n                <td ng-if=\"$list.$setup.enable.checkboxes\" class=\"d-list-table__body-cell d-list-table__body-cell-checkbox\">\n                    <input type=\"checkbox\" ng-model=\"element.$checked\" />\n                </td>\n                <td ng-hide=\"$list.$edit\" ng-repeat=\"header in $list.$headers\" class=\"d-list-table__body-cell\">\n                    <div ng-if=\"!$list.$setup.templates[header]\">{{element[header]}}</div>\n                    <div ng-if=\"$list.$setup.templates[header]\">\n                        <item data-template=\"$list.$setup.templates[header]\" data-model=\"element[header]\" data-row-model=\"element\"></item>\n                    </div>\n                </td>\n                <td ng-show=\"$list.$edit\" ng-repeat=\"header in $list.$headers\" class=\"d-list-table__body-cell--edit\">\n                    <div class=\"form-group\">\n                        <edit-input data-value=\"element[header]\" data-setup=\"$list.$setup.edit[header]\"></edit-input>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table ng-if=\"responsiveMode\" class=\"d-list-table-small\" ng-repeat=\"element in $list.$elements\">\n        <tbody>\n            <tr ng-repeat=\"header in $list.$headers\" class=\"d-list-table-small__row\">\n                <td class=\"d-list-table-small__header\">\n                    <a href=\"\" ng-if=\"$list.headerIsSortable(header)\" ng-click=\"$list.sortBy(header)\" class=\"d-list-table-small__header-sortable\">\n                        {{$list.getHeaderLabel(header) | capitalize}}\n                        <i ng-if=\"$list.$sort.by === header\" class=\"glyphicon\" ng-class=\"{\'glyphicon-chevron-down\': $list.$sort.order === \'desc\', \'glyphicon-chevron-up\': $list.$sort.order === \'asc\'}\" style=\"font-size: 10px; margin: 4px 0 0 4px\"></i>\n                    </a>\n                    <span ng-if=\"!$list.headerIsSortable(header)\">\n                        {{$list.getHeaderLabel(header) | capitalize}}\n                    </span>\n                </td>\n                <td ng-hide=\"$list.$edit\" class=\"d-list-table-small__body-cell\">\n                    <div ng-if=\"!$list.$setup.templates[header]\">{{element[header]}}</div>\n                    <div ng-if=\"$list.$setup.templates[header]\">\n                        <item data-template=\"$list.$setup.templates[header]\" data-model=\"element[header]\" data-row-model=\"element\"></item>\n                    </div>\n                </td>\n\n                <td ng-show=\"$list.$edit\" class=\"d-list-table-small__body-cell--edit\">\n                    <div class=\"form-group\">\n                        <edit-input data-value=\"element[header]\" data-setup=\"$list.$setup.edit[header]\"></edit-input>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <section ng-if=\"$list.$setup.enable.pagination\" class=\"d-list-pagination\">\n        <div class=\"input-group d-list-pagination__page-links\">\n            <span ng-bind=\"$list.$setup.i18n.pagination.prev\" ng-click=\"$list.$pagination.pageDown()\"\n                ng-disabled=\"$list.$pagination.page === 1\" class=\"input-group-addon btn btn-default d-list-pagination__prev\"></span>\n            <input type=\"text\" class=\"form-control\" ng-blur=\"$list.$pagination.ensureValidPage()\"\n                ng-model=\"$list.$pagination.page\" class=\"d-list-pagination__number\"/>\n            <span ng-bind=\"$list.$setup.i18n.pagination.next\" ng-click=\"$list.$pagination.pageUp()\"\n                ng-disabled=\"$list.$pagination.page === $list.$pagination.totalPages()\"\n                class=\"input-group-addon btn btn-default d-list-pagination__next\"></span>\n        </div>\n        <div class=\"d-list-pagination-summary\">\n            <div class=\"d-list-pagination-summary__items-number\">Showing items: {{$list.$pagination.fromItem()}} - {{$list.$pagination.toItem()}} of {{$list.$pagination.total}}</div>\n            <div class=\"d-list-pagination-summary__selected\">Selected: {{$list.selected()}}</div>\n            <div class=\"d-list-pagination-summary__total-pages\">Total pages: {{$list.$pagination.totalPages()}}</div>\n            <br/>\n            <div ng-if=\"$list.$pagination.pageSizeOptions\" class=\"d-list-pagination-summary__items-number-select btn-group\">\n                <button ng-repeat=\"pageSizeOption in $list.$pagination.pageSizeOptions\"\n                    ng-class=\"{active: pageSizeOption === $list.$pagination.pageSize}\"\n                    ng-click=\"$list.$pagination.setPageSize(pageSizeOption)\"\n                    type=\"button\" class=\"btn btn-default\">{{pageSizeOption}}</button>\n            </div>\n        </div>\n    </section>\n</div>\n");}]);