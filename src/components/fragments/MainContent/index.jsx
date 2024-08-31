import React from 'react';
import { Variable } from './GoDasar/Variable';
import { Integer } from './GoDasar/Integer';
import { Boolean } from './GoDasar/Boolean';
import { Constant } from './GoDasar/Constant';
import { Conversi } from './GoDasar/Conversi';
import { TypeDeklarasi } from './GoDasar/TypeDeklarasi';
import { OperasiMatematika } from './GoDasar/OperasiMatematika';
import { Perbandingan } from './GoDasar/Perbandingan';
import { Array } from './GoDasar/Array';
import { Slice } from './GoDasar/Slice';
import { Map } from './GoDasar/Map';
import { If } from './GoDasar/If';
import { String } from './GoDasar/String';
import { Switch } from './GoDasar/Switch';
import { For } from './GoDasar/For';
import { BreakNContinue } from './GoDasar/BreakNContinue';
import { Function } from './GoDasar/Function';
import { FunctionParameter } from './GoDasar/FunctionParameter';
import { FunctionReturn } from './GoDasar/FunctionReturn';
import { ReturningMultipleValue } from './GoDasar/ReturnMultipleValue';
import { NamedReturnValue } from './GoDasar/NamedReturnValue';
import { VariadicFunction } from './GoDasar/VariadicFunction';
import { FunctionAsValue } from './GoDasar/FunctionAsValue';
import { FunctionAsParameter } from './GoDasar/FunctionAsParameter';
import { AnonymousFunction } from './GoDasar/AnonymousFunction';
import { RecursiveFunction } from './GoDasar/RecursiveFunction';

const contentComponents = {
    'variable': Variable,
    'integer': Integer,
    'boolean': Boolean,
    'string': String,
    'const': Constant,
    'conversi': Conversi,
    'typeDeklarasi': TypeDeklarasi,
    'opm': OperasiMatematika,
    'perbandingan': Perbandingan,
    'array': Array,
    'slice': Slice,
    'map': Map,
    'if': If,
    'switch': Switch,
    'for': For,
    'breakNContinue': BreakNContinue,
    'function': Function,
    'functionParameter': FunctionParameter,
    'functionReturn': FunctionReturn,
    'returningMultipleValue': ReturningMultipleValue,
    'namedReturnValue': NamedReturnValue,
    'variadicFunction': VariadicFunction,
    'functionAsValue': FunctionAsValue,
    'functionAsParameter': FunctionAsParameter,
    'anonymousFunction': AnonymousFunction,
    'recursiveFunction': RecursiveFunction,
};

const MainContent = ({ selected }) => {
    const ContentComponent = contentComponents[selected];

    return (
        <div className='flex w-full px-5 pt-3 pb-10 lg:pt-7'>
            <div className='w-full lg:w-full lg:sticky lg:top-28'>
                {!ContentComponent ? (
                    <h1 className='text-2xl font-bold font-poppins'>Wellcome to My Documentasion</h1>
                ) : (
                    <ContentComponent />
                )}
            </div>
        </div>
    );
};

export default MainContent;
