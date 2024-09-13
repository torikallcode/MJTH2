import React from 'react';
import { Variable } from './MainContent/GoDasar/Variable';
import { Integer } from './MainContent/GoDasar/Integer';
import { Boolean } from './MainContent/GoDasar/Boolean';
import { Constant } from './MainContent/GoDasar/Constant';
import { Conversi } from './MainContent/GoDasar/Conversi';
import { TypeDeklarasi } from './MainContent/GoDasar/TypeDeklarasi';
import { OperasiMatematika } from './MainContent/GoDasar/OperasiMatematika';
import { Perbandingan } from './MainContent/GoDasar/Perbandingan';
import { Array } from './MainContent/GoDasar/Array';
import { Slice } from './MainContent/GoDasar/Slice';
import { Map } from './MainContent/GoDasar/Map';
import { If } from './MainContent/GoDasar/If';
import { String } from './MainContent/GoDasar/String';
import { Switch } from './MainContent/GoDasar/Switch';
import { For } from './MainContent/GoDasar/For';
import { BreakNContinue } from './MainContent/GoDasar/BreakNContinue';
import { Function } from './MainContent/GoDasar/Function';
import { FunctionParameter } from './MainContent/GoDasar/FunctionParameter';
import { FunctionReturn } from './MainContent/GoDasar/FunctionReturn';
import { ReturningMultipleValue } from './MainContent/GoDasar/ReturnMultipleValue';
import { NamedReturnValue } from './MainContent/GoDasar/NamedReturnValue';
import { VariadicFunction } from './MainContent/GoDasar/VariadicFunction';
import { FunctionAsValue } from './MainContent/GoDasar/FunctionAsValue';
import { FunctionAsParameter } from './MainContent/GoDasar/FunctionAsParameter';
import { AnonymousFunction } from './MainContent/GoDasar/AnonymousFunction';
import { RecursiveFunction } from './MainContent/GoDasar/RecursiveFunction';
import { AccesModifier } from './MainContent/GoDasar/AccesModifier';
import { AsteriskOperator } from './MainContent/GoDasar/AsteriskOperator';
import { Closure } from './MainContent/GoDasar/Closure';
import { Defer } from './MainContent/GoDasar/Defer';
import { Panic } from './MainContent/GoDasar/Panic';
import { Recover } from './MainContent/GoDasar/Recover';
import { Struct } from './MainContent/GoDasar/Struct';
import { Interface } from './MainContent/GoDasar/Interface';
import { Nil } from './MainContent/GoDasar/Nil';
import { TypeAssertions } from './MainContent/GoDasar/TypeAssertions';
import { Pointer } from './MainContent/GoDasar/Pointer';
import { OperatorNew } from './MainContent/GoDasar/OperatorNew';
import { PointerFunction } from './MainContent/GoDasar/PointerFunction';
import { PointerStruct } from './MainContent/GoDasar/PointerStruct';
import { PackageNImport } from './MainContent/GoDasar/PackageNImport';
import { PackageInitialization } from './MainContent/GoDasar/PackageInitialization';
import { Error } from './MainContent/GoDasar/Error';
import { Mudah } from './MainContent/LatihanSoal/Mudah';
import { Sedang } from './MainContent/LatihanSoal/Sedang';
import { Lanjutan } from './MainContent/LatihanSoal/Lanjutan';
import { StandartLibrary } from './MainContent/StandartLibrary/Index';
import { Fmt } from './MainContent/StandartLibrary/Fmt';
import { Errors } from './MainContent/StandartLibrary/Errors';
import { Os } from './MainContent/StandartLibrary/Os';
import { Flag } from './MainContent/StandartLibrary/FLag';
import { Strings } from './MainContent/StandartLibrary/Strings';
import { Strconv } from './MainContent/StandartLibrary/Strconv';
import { Math } from './MainContent/StandartLibrary/Math';
import { ContainerLIst } from './MainContent/StandartLibrary/ContainerList';

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
    'mudah': Mudah,
    'sedang': Sedang,
    'lanjutan': Lanjutan,
    'standartLibrary': StandartLibrary,
    'fmt': Fmt,
    'errors': Errors,
    'os': Os,
    'flag': Flag,
    'strings': Strings,
    'strconv': Strconv,
    'math': Math,
    'containerList': ContainerLIst,
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
