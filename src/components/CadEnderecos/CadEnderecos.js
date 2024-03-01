import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function CadEnderecos() {
    const [alterar, setAlterar] = useState(false);
    const [endereco, setEndereco] = useState({
        id: uuidv4(),
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
    });
    const [enderecos, setEnderecos] = useState([]);

    useEffect(() => {
        const enderecosStorage = localStorage.getItem("enderecos");

        if (enderecosStorage) {
            const enderecosGravados = JSON.parse(enderecosStorage);

            if (enderecosGravados) {
                setEnderecos(enderecosGravados);
            }
        }
    }, []);

    useEffect(() => {
        if (enderecos.length > 0) {
            localStorage.setItem("enderecos", JSON.stringify(enderecos));
        } else {
            localStorage.setItem("enderecos", "");
        }
    }, [enderecos]);

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
        setEnderecos([...enderecos, endereco]);
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
    };

    const clickAtualizar = (enderecoItem) => {
        console.log("clickAtualizar");
        console.log(enderecos);
        setEnderecos(enderecos.map((enderecoItem) => (enderecoItem.id === endereco.id ? endereco : enderecoItem)));
        setAlterar(false);
        setEndereco({
            id: uuidv4(),
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
            cep: "",
        });
    };

    const clickEditar = (enderecoItem) => {
        setAlterar(true);
        setEndereco(enderecoItem);

        console.log("clickEditar");
    };

    const clickExcluir = (enderecoItem) => {
        setEnderecos(enderecos.filter((item) => item.id !== enderecoItem.id));
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
                        <button
                            onClick={() => {
                                clickAtualizar(endereco);
                            }}>
                            Atualizar
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                clickAdicionar();
                            }}>
                            Adicionar
                        </button>
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
                        {enderecos.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <i>{item.logradouro}</i>
                                </td>
                                <td>
                                    <i>{item.numero}</i>
                                </td>
                                <td>
                                    <i>{item.complemento}</i>
                                </td>
                                <td>
                                    <i>{item.bairro}</i>
                                </td>
                                <td>
                                    <i>{item.cidade}</i>
                                </td>
                                <td>
                                    <i>{item.uf}</i>
                                </td>
                                <td>
                                    <i>{item.cep}</i>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            clickEditar(item);
                                        }}>
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            clickExcluir(item);
                                        }}>
                                        Excluir
                                    </button>
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
