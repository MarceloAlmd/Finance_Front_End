import {Routes, Route} from 'react-router-dom';

import {NewFinancial} from '../pages/NewFinancial';
import {Home} from '../pages/Home';
import {Profile} from '../pages/Profile';
import {FinancialDetails} from '../pages/FinancialDetails';

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewFinancial />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<FinancialDetails />} />
        </Routes>
    )
}