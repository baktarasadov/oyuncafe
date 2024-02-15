import { FormikErrors } from 'formik';
import { useCallback, useState } from 'react';

const useFormValidation = (formik: { errors: FormikErrors<any> }) => {
    const [showError, setShowError] = useState(false);

    const handleButtonClick = useCallback(() => {
        if (Object.keys(formik.errors).length > 0) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    }, [formik.errors, setShowError]);

    return { showError, setShowError, handleButtonClick };
};

export default useFormValidation;
