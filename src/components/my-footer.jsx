import React from "react";
import { t } from "i18next";

const MyFooter = () => {
    return (
        <div className="my-footer text-center p-1">
            {t("footer.created_by")} Harshitha
        </div>
    );
};

export default MyFooter;