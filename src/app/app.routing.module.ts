import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';

const appRoutes: Routes = [
    { path: 'addExpenses', component: ExpensesComponent },
    { path: 'expenses', component: ExpensesListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
