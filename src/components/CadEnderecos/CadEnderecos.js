import React, { useState, useEffect } from "react";

function CadEnderecos() {
    const [alterar, setAlterar] = useState(null);
    const [endereco, setEndereco] = useState({
        id: 1,
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
    });
    const [blablabla, setBlablabla] = useState([]);
    /*
    useEffect(() => {
        const enderecosStorage = localStorage.getItem("enderecos");

        if (enderecosStorage) {
            const enderecosGravados = JSON.parse(enderecosStorage);

            if (enderecosGravados) {
                setEnderecos(enderecosGravados);
            }
        }
    }, []);
*/

    /*    
    useEffect(() => {
        if (enderecos.length > 0) {
            localStorage.setItem("enderecos", JSON.stringify(enderecos));
        } else {
            localStorage.setItem("enderecos", "");
        }

        console.log(enderecos);
        console.log("effect: enderecos");
    }, [enderecos]);
*/
    function getUltimoID() {
        const enderecosQtd = blablabla.length;
        var result = 1;

        if (enderecosQtd > 0) {
            const enderecoUltimo = blablabla[enderecosQtd - 1];
            result = enderecoUltimo.id;
        }

        return result;
    }

    const changeLogradouro = (e) => {
        setEndereco({ ...endereco, logradouro: e.target.value });
    };

    const changeNumero = (e) => {
        setEndereco({ ...endereco, numero: e.target.value });
    };

    const changeComplemento = (e) => {
        setEndereco({ ...endereco, complemento: e.target.value });
    };

    const changeBairro = (e) => {
        setEndereco({ ...endereco, bairro: e.target.value });
    };

    const changeCidade = (e) => {
        setEndereco({ ...endereco, cidade: e.target.value });
    };

    const changeUF = (e) => {
        setEndereco({ ...endereco, uf: e.target.value });
    };

    const changeCEP = (e) => {
        setEndereco({ ...endereco, cep: e.target.value });
    };

    const clickAdicionar = () => {
        setBlablabla(blablabla.concat(endereco));
        const proximoID = 2; //getUltimoID() + 1;
        console.log("vai fazer setEndereco");
        console.log(endereco);
        setEndereco({
            id: 1,
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
            cep: "",
        });
        console.log("clickAdicionar");
        console.log(blablabla);
    };

    const clickAtualizar = (enderecoItem) => {
        /*        
        console.log("clickAtualizar");
        console.log(enderecos);
        setEnderecos(enderecos.map((enderecoItem) => (enderecoItem.id === endereco.id ? endereco : enderecoItem)));
        setAlterar(null);
        const proximoID = getUltimoID() + 1;
        setEndereco({
            id: proximoID,
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
            cep: "",
        });
*/
    };

    const clickEditar = (enderecoItem) => {
        setAlterar(enderecoItem);
        setEndereco(enderecoItem);
    };

    const clickExcluir = (enderecoItem) => {
        setBlablabla(blablabla.filter((item) => item.id !== enderecoItem.id));
    };

    return (
        <>
            <h1>Endereços</h1>
            <section>
                <div>
                    <div>Logradouro</div>
                    <input type="text" placeholder="Logradouro" value={endereco.logradouro} onChange={changeLogradouro}></input>
                </div>
                <div>
                    <div>Número</div>
                    <input type="number" placeholder="Número" value={endereco.numero} onChange={changeNumero}></input>
                </div>
                <div>
                    <div>Complemento</div>
                    <input
                        type="text"
                        placeholder="Complemento"
                        value={endereco.complemento}
                        onChange={changeComplemento}></input>
                </div>
                <div>
                    <div>Bairro</div>
                    <input type="text" placeholder="Bairro" value={endereco.bairro} onChange={changeBairro}></input>
                </div>
                <div>
                    <div>Cidade</div>
                    <input type="text" placeholder="Cidade" value={endereco.cidade} onChange={changeCidade}></input>
                </div>
                <div>
                    <div>UF</div>
                    <input type="text" placeholder="UF" value={endereco.uf} onChange={changeUF}></input>
                </div>
                <div>
                    <div>CEP</div>
                    <input type="text" placeholder="CEP" value={endereco.cep} onChange={changeCEP}></input>
                </div>
                <div>
                    {alterar ? (
                        <button onClick={clickAtualizar(endereco)}>Atualizar</button>
                    ) : (
                        <button onClick={clickAdicionar}>Adicionar</button>
                    )}
                </div>
            </section>
            <hr />
            <section>
                <table>
                    <tbody>
                        <tr key="0">
                            <td>
                                <b>Logradouro</b>
                            </td>
                            <td>
                                <b>Número</b>
                            </td>
                            <td>
                                <b>Complemento</b>
                            </td>
                            <td>
                                <b>Bairro</b>
                            </td>
                            <td>
                                <b>Cidade</b>
                            </td>
                            <td>
                                <b>UF</b>
                            </td>
                            <td>
                                <b>CEP</b>
                            </td>
                            <td>
                                <b></b>
                            </td>
                            <td>
                                <b></b>
                            </td>
                        </tr>
                        {blablabla.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <b>{item.logradouro}</b>
                                </td>
                                <td>
                                    <b>{item.numero}</b>
                                </td>
                                <td>
                                    <b>{item.complemento}</b>
                                </td>
                                <td>
                                    <b>{item.bairro}</b>
                                </td>
                                <td>
                                    <b>{item.cidade}</b>
                                </td>
                                <td>
                                    <b>{item.uf}</b>
                                </td>
                                <td>
                                    <b>{item.cep}</b>
                                </td>
                                <td>
                                    <button onClick={clickEditar(item)}>Editar</button>
                                </td>
                                <td>
                                    <button onClick={clickExcluir(item)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default CadEnderecos;
