﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeJobRole.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployeeJobRoles"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};