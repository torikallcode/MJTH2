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
import { AccesModifier } from './GoDasar/AccesModifier';
import { AsteriskOperator } from './GoDasar/AsteriskOperator';
import { Closure } from './GoDasar/Closure';
import { Defer } from './GoDasar/Defer';
import { Panic } from './GoDasar/Panic';
import { Recover } from './GoDasar/Recover';
import { Struct } from './GoDasar/Struct';
import { Interface } from './GoDasar/Interface';
import { Nil } from './GoDasar/Nil';
import { TypeAssertions } from './GoDasar/TypeAssertions';
import { Pointer } from './GoDasar/Pointer';
import { OperatorNew } from './GoDasar/OperatorNew';
import { PointerFunction } from './GoDasar/PointerFunction';
import { PointerStruct } from './GoDasar/PointerStruct';
import { PackageNImport } from './GoDasar/PackageNImport';
import { PackageInitialization } from './GoDasar/PackageInitialization';
import { Error } from './GoDasar/Error';

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
    'accessModifier': AccesModifier,
    'asteriskOperator': AsteriskOperator,
    'closure': Closure,
    'defer': Defer,
    'panic': Panic,
    'recover': Recover,
    'struct': Struct,
    'interface': Interface,
    'nil': Nil,
    'typeAssertions': TypeAssertions,
    'pointer': Pointer,
    'operatorNew': OperatorNew,
    'pointerFunction': PointerFunction,
    'pointerStruct': PointerStruct,
    'packageNImport': PackageNImport,
    'packageInitialization': PackageInitialization,
    'error': Error,
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
