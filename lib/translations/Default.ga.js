"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ga = void 0;
var types_1 = require("../types");
exports.ga = {
    category: (_a = {},
        _a[types_1.Category.DRY_SOILS] = 'Ithir thirim',
        _a[types_1.Category.WET_SOILS] = 'Ithir fhliuch',
        _a[types_1.Category.EROSION] = 'Creimeadh',
        _a[types_1.Category.SEALED_SOILS] = 'Ithir shéalaithe',
        _a[types_1.Category.DEGRADATION] = 'Meath na hithreach',
        _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = 'Cailliúint ábhair orgánaigh',
        _a[types_1.Category.PH] = 'pH',
        _a[types_1.Category.BIODIVERSITY] = 'Bithéagsúlacht',
        _a),
    categoryInformation: {
        DRY_SOILS: '<b>Fásachú</b> - An próiseas ina dtagann tirimeacht níos mó ar thalamh atá réasúnta tirim cheana féin, agus é ag cailleadh a choirp uisce chomh maith le fásra agus fiadhúlra, go díreach trí athrú aeráide nó go hindíreach trí mheath ithreach mar thoradh ar bhainistíocht mhícheart.\n<b>Measúnú ar Thirimeacht na hIthreach</b>\n<b>Míniú</b>: Féadfaidh tirimeacht ithreach teacht ó fhachtóirí éagsúla, mar shampla báisteach neamhleor, teocht ard, nó drochstruchtúr ithreach. Trí thuiscint a fháil ar an bpríomhchúis is féidir an fhadhb a réiteach níos éifeachtaí.\n<b>Céard a shíleann tú is cúis leis an tirimeacht ithreach i do cheantar?</b>\nA. Easpa báistí (Tréimhsí fada le beagán báistí nó gan aon bháisteach)\nB. Teochtaí arda (Aimsir the a fhágann go n-éalóidh uisce tríd an galú)\nC. Drochstruchtúr ithreach (Ithir nach gcoinníonn uisce go maith)\nD. Úsáid iomarcach acmhainní uisce (Úsáid mhór uisce don talmhaíocht nó do chuspóirí eile)\nE. Dífhoraoisiú (Crainn a bhaint, a chabhraíonn le taise a choinneáil)\nF. Athrú aeráide (Athruithe fadtéarmacha i bpatrúin aimsire)\nG. Rómhórchaoradh (Beostoic ag innilt iomarcach ar an talamh)\nH. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Easpa báistí</b>: Smaoinigh an raibh tréimhsí fada tirime ann le déanaí.\n- <b>Teochtaí arda</b>: Machnaigh ar thonnta teasa nó aimsir neamhghnách the.\n- <b>Drochstruchtúr ithreach</b>: Tabhair faoi deara an bhfuil an ithir gainimh nó nach gcoinníonn sí uisce.\n- <b>Úsáid iomarcach acmhainní uisce</b>: Déan machnamh ar an méid uisce a úsáidtear go háitiúil don talmhaíocht nó don tionsclaíocht.\n- <b>Dífhoraoisiú</b>: Smaoinigh an bhfuil baint mhór crann i do cheantar.\n- <b>Athrú aeráide</b>: Machnaigh ar na hathruithe fadtéarmacha i bpatrúin aimsire.\n- <b>Rómhórchaoradh</b>: Smaoinigh an bhfuil an talamh á úsáid go forleathan le haghaidh beostoic.',
        WET_SOILS: '<b>Measúnú ar Uisceachas na hIthreach</b>\n<b>Míniú</b>: Tarlaíonn uisceachas ithreach nuair a bhíonn barraíocht uisce ag sáithiú an ithir, go minic mar gheall ar bháisteach throm, droch-dhraenáil, nó leibhéil arda screamhuisce. Is féidir cúis an fhadhb a aithint chun leibhéil uisce a bhainistiú níos fearr.\n<b>Céard a shíleann tú is cúis leis an uisceachas ithreach i do cheantar?</b>\nA. Báisteach throm (Báisteach go minic nó dian)\nB. Córais dhraenála lag (Bunstruchtúr draenála neamhleor)\nC. Tábla ard uisce (Leibhéal an screamhuisce gar don dromchla)\nD. Ró-uirgeadh (Ró-uisciú barr nó gairdíní)\nE. Dhlúthú ithreach (Caithníní ithreach brúite le chéile, ag laghdú an spáis phioctha)\nF. Uirbiú (Dromchlaí neamh-thréscaoilte níos mó, cosúil le bóithre agus foirgnimh)\nG. Tuilte (Barrachas uisce ag teacht ó aibhneacha nó lochanna)\nH. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Báisteach throm</b>: Smaoinigh an bhfuil báisteach dhian nó choitianta i do cheantar.\n- <b>Córais dhraenála lag</b>: Meas ar éifeachtacht bhunstruchtúr draenála áitiúil.\n- <b>Tábla ard uisce</b>: Tabhair faoi deara an bhfuil leibhéil an screamhuisce gar don dromchla.\n- <b>Ró-uirgeadh</b>: Déan machnamh ar chleachtais áitiúla talmhaíochta agus úsáid uisce.\n- <b>Dhlúthú ithreach</b>: Smaoinigh an bhfuil an ithir crua agus dlúthaithe.\n- <b>Uirbiú</b>: Machnaigh ar an méid dromchlaí neamh-thréscaoilte i do cheantar.\n- <b>Tuilte</b>: Smaoinigh an raibh tuilte le déanaí.',
        EROSION: '<b>Creimeadh ithreach</b> - Is é creimeadh an próiseas ina mbaintear ithir nó talamh trí phróisis éagsúla. I measc na bpríomhchúiseanna le creimeadh tá gníomh an uisce (craobhaibh, eatra-chraobhaibh, gleannta, leá sneachta agus creimeadh bhruacha aibhneacha agus lochanna), an ghaoth (triomú agus séideán gaoithe), aistriú (saothrú, leibhéalú talún, fómhar barra fréimhe, trampling agus tochailt ainmhithe), agus próisis gheolaíochta (creimeadh inmheánach faoi thalamh de bharr screamhuisce, creimeadh cósta agus maidhm thalún). Is féidir le drochbhainistíocht talún, mar shampla rómhórchaoradh, dífhoraoisiú nó úsáid mhícheart ar mheaisínithe (m.sh. iompú na hithreach síos fána) creimeadh a mhéadú.\n<b>Measúnú ar Chreimeadh na hIthreach</b>\n<b>Míniú</b>: Is é creimeadh ithreach an baint de chiseal uachtarach na hithreach de bharr gaoithe, uisce nó gníomhaíochtaí daonna. D’fhéadfadh sé seo cailliúint ithreach torthúil agus fadhbanna comhshaoil eile a chruthú.\n<b>Cén leibhéal déine creimthe ithreach atá i do cheantar, dar leat?</b>\nA. Íseal (Caillteanas ithreach íosta)\nB. Measartha (Caillteanas ithreach suntasach)\nC. Ard (Caillteanas ithreach dian)\nD. An-ard (Caillteanas ithreach fairsing)\n<b>Cé na cineálacha creimthe ithreach is coitianta i do cheantar?</b>\nA. Creimeadh gaoithe (Ithir á séideadh ag an ngaoth)\nB. Creimeadh uisce (Ithir á ní ag báisteach nó aibhneacha)\nC. Gníomhaíocht dhaonna (m.sh. tógáil, talmhaíocht)\nD. Creimeadh gleannta (Bunú chainéil mhóra nó gleannta)\nE. Creimeadh leatháin (Ciseal tanaí ithreach á bhaint thar limistéar mór)\nF. Creimeadh rille (Cainéil bheaga a fhoirmítear le huisce reatha)\nG. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Creimeadh gaoithe</b>: Smaoinigh an bhfuil gaotha láidre agus ithir scaoilte sa cheantar.\n- <b>Creimeadh uisce</b>: Meas an bhfuil báisteach throm agus patrúin sreafa uisce ann.\n- <b>Gníomhaíocht dhaonna</b>: Déan machnamh ar thionchar na tógála, na feirmeoireachta nó gníomhaíochtaí eile daonna.\n- <b>Creimeadh gleannta</b>: Tabhair faoi deara an bhfuil cainéil mhóra nó gleannta ag foirmiú.\n- <b>Creimeadh leatháin</b>: Machnaigh an bhfuil ciseal tanaí ithreach á bhaint go leanúnach thar limistéar mór.\n- <b>Creimeadh rille</b>: Smaoinigh an bhfuil cainéil bheaga á gcruthú ag uisce reatha.',
        SEALED_SOILS: '<b>Séalaíocht ithreach</b> - An próiseas ina gclúdaítear ithir le foirgnimh nó ábhair shaorga nach bhfuil tréscaoilteacht mhaith acu don uisce (m.sh. asfalt nó coincréit). Is féidir le séalaíocht ithreach sreabhadh tapa os cionn an talaimh a chruthú tar éis frasaíochta, áit nach féidir leis an uisce dul tríd an ithir, rud a d’fhéadfadh tuilte a chruthú. Ní féidir leis an ithir feidhmiú go héifeachtach nuair a bhíonn sí séalaithe.\n<b>Measúnú ar Shéalaíocht na hIthreach</b>\n<b>Míniú</b>: Tarlaíonn séalaíocht dhromchla na hithreach nuair a éiríonn an dromchla neamh-thréscaoilteach, go minic mar thoradh ar uirbiú nó dlúthú ithreach. Is féidir leis seo cosc a chur ar shú isteach an uisce agus tionchar diúltach a imirt ar shláinte na hithreach.\n<b>Cén cur síos a dhéanfá ar an séalaíocht ithreach i do cheantar?</b>\nA. Séalaíocht íosta (Tá formhór na ndromchlaí ithreach tréscaoilteach)\nB. Séalaíocht mheasartha (Tá roinnt limistéar neamh-thréscaoilteach)\nC. Séalaíocht fairsing (Tá limistéir mhóra neamh-thréscaoilteach)\nD. Séalaíocht an-fhairsing (Tá formhór na limistéar neamh-thréscaoilteach)\n<b>Céard a shíleann tú is príomhchúis leis an séalaíocht ithreach i do cheantar?</b>\nA. Uirbiú (Tógáil foirgneamh agus bóithre)\nB. Cleachtais talmhaíochta (Úsáid innealra troma)\nC. Gníomhaíochtaí tionsclaíocha (Monarchana agus láithreáin tionsclaíocha eile)\nD. Dlúthú ithreach (Caithníní ithreach brúite le chéile, ag laghdú an spáis phioctha)\nE. Pábháil agus coincréidiú (Clúdach ithreach le hábhair neamh-thréscaoilteacha)\nF. Próisis nádúrtha (m.sh. foirmiú screamh)\nG. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Uirbiú</b>: Smaoinigh ar an méid foirgneamh agus bóithre atá sa cheantar.\n- <b>Cleachtais talmhaíochta</b>: Machnaigh ar an úsáid a bhaintear as innealra troma sa talmhaíocht.\n- <b>Gníomhaíochtaí tionsclaíocha</b>: Déan machnamh ar líon na monarchana agus suíomhanna tionsclaíocha eile.\n- <b>Dlúthú ithreach</b>: Tabhair faoi deara an bhfuil an ithir crua agus dlúthaithe.\n- <b>Pábháil agus coincréidiú</b>: Machnaigh ar an méid dromchlaí pábháilte nó coincréiteacha.\n- <b>Próisis nádúrtha</b>: Smaoinigh ar fhoirmiú nádúrtha screamh ar dhromchla na hithreach.',
        DEGRADATION: '<b>Meath ithreach</b> - Próiseas diúltach a dhéantar níos measa go minic mar gheall ar ghníomhaíochtaí daonna (úsáid mhícheart ithreach agus cleachtais saothraithe, séalaíocht ithreach) a fhágann go ndéantar dochar do thréithe agus do fheidhmeanna na hithreach, nó fiú a scriosadh iomlán, m.sh., dlúthú, creimeadh, sailleadh.\n<b>Truailliú ithreach</b> - Láithreacht ceimiceáin nó substaintí san ithir i dtiúchan a d’fhéadfadh a bheith díobhálach do shláinte an duine nó don chomhshaol. Féadfaidh truailliú tionchar díreach tocsaineach a imirt ar phlandaí, ar ainmhithe nó ar dhaoine a mhaireann san ithir, ar an ithir, nó a bhraitheann uirthi, nó d’fhéadfadh éifeacht thocsaineach indíreach a bheith aige mar gheall ar charnadh sa slabhra trófach iomlán.\n<b>Sailleadh</b> - Carnadh salainn intuaslagtha (níos intuaslagtha ná gipseam) sna sraitheanna ithreach uachtaracha (ithir shailleach = ithir ina bhfuil go leor salainn intuaslagtha chun tionchar diúltach a imirt ar fhormhór na mbarr, de ghnáth 4000 μS m-1).\n<b>Measúnú ar Mheath Ithreach</b>\n<b>Míniú</b>: Tagraíonn meath ithreach do mheath cáilíochta na hithreach mar gheall ar fhachtóirí cosúil le creimeadh, truailliú, nó cailliúint cothaitheach. D’fhéadfadh tionchar a bheith aige seo ar tháirgiúlacht talmhaíochta agus ar shláinte an éiceachórais.\n<b>Cén leibhéal meath ithreach atá i do cheantar?</b>\nA. Meath íosta (Tá cáilíocht ithreach go ginearálta maith)\nB. Meath measartha (Tá roinnt meath ar cháilíocht ithreach)\nC. Meath dian (Tá meath suntasach ar cháilíocht ithreach)\nD. Meath an-dian (Tá meath fairsing ar cháilíocht ithreach)\n<b>Céard a shíleann tú is príomhchúis le meath ithreach i do cheantar?</b>\nA. Creimeadh (Cailleadh an chiseal uachtarach ithreach)\nB. Truailliú (m.sh. ceimiceáin, truailleáin)\nC. Cailliúint cothaitheach (Ídiú cothaithigh riachtanacha san ithir)\nD. Ró-úsáid na hithreach (Feirmeoireacht dhian nó gníomhaíochtaí eile)\nE. Dífhoraoisiú (Crainn a bhaint a chosnaíonn an ithir)\nF. Athrú aeráide (Athruithe fadtéarmacha i bpatrúin aimsire)\nG. Rómhórchaoradh (Beostoic ag innilt iomarcach)\nH. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Creimeadh</b>: Smaoinigh an bhfuil cailliúint ithreach suntasach i do cheantar.\n- <b>Truailliú</b>: Machnaigh an bhfuil ceimiceáin nó truailleáin láithreacht san ithir.\n- <b>Cailliúint cothaitheach</b>: Déan machnamh ar thorthúlacht agus ar ábhar cothaitheach na hithreach.\n- <b>Ró-úsáid na hithreach</b>: Meas an bhfuil feirmeoireacht dhian nó gníomhaíochtaí eile á ndéanamh.\n- <b>Dífhoraoisiú</b>: Smaoinigh ar an méid crann agus fásra a baineadh i do cheantar.\n- <b>Athrú aeráide</b>: Machnaigh ar na hathruithe fadtéarmacha i bpatrúin aimsire.\n- <b>Rómhórchaoradh</b>: Déan measúnú an bhfuil innilt beostoic ró-mhór.',
        LOSS_OF_ORGANIC_MATTER: '<b>Cailliúint Ábhair Orgánaigh Ithreach</b> - Laghduithe ar ábhar orgánach i gciseal amháin nó níos mó den ithir nuair nach mbíonn an chailliúint bhliantúil d’ábhar orgánach (m.sh. trí ocsaídiú nó creimeadh) á cúiteamh go leordhóthanach ag gnóthachan bliantúil ábhair orgánaigh ó iarsmaí barra, múirín agus aoileach.\n<b>Measúnú ar Chailliúint Ábhair Orgánaigh Ithreach</b>\n<b>Míniú</b>: Tá ábhar orgánach ithreach ríthábhachtach do thorthúlacht agus do struchtúr na hithreach. Féadfaidh cailliúint ábhair orgánaigh tarlú mar thoradh ar chleachtais mhíchearta bainistíochta talún nó próisis nádúrtha.\n<b>Cé chomh tromchúiseach is atá an cailliúint ábhair orgánaigh ithreach i do cheantar?</b>\nA. Íseal (Cailliúint íosta)\nB. Measartha (Cailliúint shuntasach)\nC. Ard (Cailliúint mhór)\nD. An-ard (Cailliúint fhairsing)\n<b>Céard a shíleann tú is príomhchúis le cailliúint ábhair orgánaigh ithreach i do cheantar?</b>\nA. Talmhaíocht dhian (Saothrú minic agus treabhadh leanúnach)\nB. Dífhoraoisiú (Baint crann agus fásra)\nC. Rómhórchaoradh (Beostoic ag innilt iomarcach ar an talamh)\nD. Creimeadh ithreach (Cailleadh an chiseal uachtarach ithreach ina bhfuil ábhar orgánach)\nE. Athrú aeráide (Athruithe ar theocht agus frasaíocht)\nF. Drochbhainistíocht talún (Cleachtais neamhdhóthanacha caomhnaithe ithreach)\nG. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Talmhaíocht dhian</b>: Smaoinigh ar shaoirsiú minic barr agus treabhadh leanúnach.\n- <b>Dífhoraoisiú</b>: Machnaigh ar an méid crann agus fásra a baineadh i do cheantar.\n- <b>Rómhórchaoradh</b>: Déan machnamh ar dhéine innilte beostoic.\n- <b>Creimeadh ithreach</b>: Smaoinigh an bhfuil cailliúint ithreach shuntasach i do cheantar.\n- <b>Athrú aeráide</b>: Machnaigh ar athruithe ar theocht agus ar phatrúin frasaíochta.\n- <b>Drochbhainistíocht talún</b>: Déan measúnú ar chleachtais chaomhnaithe ithreach i do cheantar.',
        PH: '<b>Aigéadú</b> - An próiseas ina n-ardaíonn tiúchan na n-ian hidrigin san ithir de réir a chéile, de bharr baint ian beagán alcaileach leis an mbarr, asaithe agus cur i bhfeidhm cineálacha leasacháin N aigéadacha. Déantar an próiseas seo a bhrostú nó ní dhéantar é a chúiteamh go leordhóthanach le comhpháirteanna nádúrtha na hithreach, lena n-áirítear ábhar máthairúil.\n<b>pH na hIthreach</b>\n<b>Measúnú ar pH na hIthreach</b>\n<b>Míniú</b>: Is tomhas é pH na hithreach ar aigéadacht nó alcaileacht na hithreach. Féadfaidh sé tionchar suntasach a imirt ar fhás plandaí agus ar shláinte na hithreach. Is féidir le plandaí áirithe, ar a dtugtar plandaí táscairí, cabhrú le pH na hithreach a chinneadh bunaithe ar a láithreacht agus a riocht.\n<b>Cén cur síos a dhéanfá ar leibhéal pH do hithreach bunaithe ar na plandaí atá ag fás inti?</b>\nA. Aigéadach (m.sh. láithreacht fraochán gorm, azaleas)\nB. Beagán aigéadach (m.sh. láithreacht raithneach, ródodendron)\nC. Neodrach (m.sh. láithreacht seamair, caisearbhán)\nD. Beagán alcaileach (m.sh. láithreacht labhandair, coirce fiáin)\nE. Alcaileach (m.sh. láithreacht sagebrush, saltbush)\nF. Níl mé cinnte (Níl mé cinnte faoi na plandaí nó faoin gcaoi a léiríonn siad pH na hithreach)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Aigéadach</b>: Má thugann tú faoi deara go bhfuil plandaí cosúil le fraochán gorm nó azaleas ag fás go maith, is dócha go bhfuil an ithir aigéadach.\n- <b>Beagán aigéadach</b>: Léiríonn plandaí cosúil le raithneach agus ródodendron ithir beagán aigéadach.\n- <b>Neodrach</b>: Bíonn seamair agus caisearbhán le fáil go minic in ithir le pH neodrach.\n- <b>Beagán alcaileach</b>: Léiríonn labhandar agus coirce fiáin ithir beagán alcaileach.\n- <b>Alcaileach</b>: Fásann sagebrush agus saltbush go maith in ithir alcaileach.\n- <b>Níl mé cinnte</b>: Má tá tú neamhchinnte faoi na plandaí nó faoin gcaoi a léiríonn siad pH na hithreach, ligeann an rogha seo duit do neamhchinnteacht a chur in iúl.',
        BIODIVERSITY: '<b>Bithéagsúlacht</b> - An éagsúlacht i measc orgánaigh bheo ó gach foinse, lena n-áirítear éiceachórais talún, mhuirí agus uiscí eile, chomh maith le coimpléisc éiceolaíocha lena mbaineann siad. Áirítear leis seo éagsúlacht laistigh de speicis, idir speicis, agus éagsúlacht éiceachórais.\n<b>Measúnú ar Bhithéagsúlacht na hIthreach agus an Timpeallacht Áitiúil</b>\n<b>Míniú</b>: Tagraíonn bithéagsúlacht san ithir don éagsúlacht orgánach atá ina gcónaí san ithir, lena n-áirítear baictéir, fungais, feithidí, agus plandaí. Is comhartha de chóras éiceolaíoch sláintiúil í bithéagsúlacht ard, rud a chuireann le torthúlacht agus cobhsaíocht na hithreach.\n<b>Cé chomh hard is atá bithéagsúlacht orgánach ithreach i do cheantar?</b>\nA. Íseal (Beagán speiceas éagsúla)\nB. Measartha (Roinnt éagsúlacht speiceas)\nC. Ard (Go leor speicis éagsúla)\nD. An-ard (Éagsúlacht speiceas flúirseach)\nE. Níl mé cinnte (Níl mé cinnte faoin éagsúlacht orgánach san ithir)\n<b>Céard a shíleann tú is príomhfhachtóir a théann i bhfeidhm ar bhithéagsúlacht ithreach i do cheantar?</b>\nA. Cleachtais talmhaíochta (Úsáid lotnaidicídí, monacultúr)\nB. Uirbiú (Cailleadh gnáthóg nádúrtha)\nC. Truailliú (Truailleáin a théann i bhfeidhm ar shaol na hithreach)\nD. Athrú aeráide (Athruithe ar theocht agus frasaíocht)\nE. Dífhoraoisiú (Cailleadh crann agus fásra)\nF. Coinníollacha nádúrtha ithreach (Airíonna nádúrtha na hithreach)\nG. Eile (luaigh le do thoil)\n<b>Tráchtaireachtaí ar na Freagraí</b>:\n- <b>Íseal</b>: Má thugann tú faoi deara beagán speiceas éagsúla, is dócha go bhfuil bithéagsúlacht íseal.\n- <b>Measartha</b>: Léiríonn roinnt éagsúlacht speiceas bithéagsúlacht mheasartha.\n- <b>Ard</b>: Léiríonn go leor speicis éagsúla bithéagsúlacht ard.\n- <b>An-ard</b>: Léiríonn éagsúlacht speiceas flúirseach bithéagsúlacht an-ard.\n- <b>Níl mé cinnte</b>: Má tá tú neamhchinnte faoin éagsúlacht orgánach san ithir, ligeann an rogha seo duit an neamhchinnteacht sin a chur in iúl.\n- <b>Cleachtais talmhaíochta</b>: Meas an bhfuil tionchar ag modhanna feirmeoireachta, cosúil le húsáid lotnaidicídí agus monacultúr.\n- <b>Uirbiú</b>: Machnaigh ar mhéid an fhorbartha uirbí agus ar chailleadh gnáthóige.\n- <b>Truailliú</b>: Smaoinigh ar láithreacht truailleán a d’fhéadfadh dul i bhfeidhm ar shaol na hithreach.\n- <b>Athrú aeráide</b>: Déan machnamh ar athruithe ar phatrúin teochta agus frasaíochta.\n- <b>Dífhoraoisiú</b>: Meas an bhfuil tionchar ag baint crann ar bhithéagsúlacht.\n- <b>Coinníollacha nádúrtha ithreach</b>: Smaoinigh ar airíonna nádúrtha na hithreach a d’fhéadfadh dul i bhfeidhm ar bhithéagsúlacht.'
    },
    categoryInformationTooltip: {
        DRY_SOILS: '<b>Fásachú</b> - An próiseas ina n-éiríonn talamh réasúnta tirim níos tirime fós.',
        WET_SOILS: '<b>Measúnú ar Uisceachas na hIthreach</b> - Tarlaíonn uisceachas ithreach nuair a bhíonn an iomarca uisce ag sáithiú an ithir.',
        EROSION: '<b>Creimeadh ithreach</b> - Is é creimeadh an baint de thalamh nó ithir trí phróisis éagsúla.',
        SEALED_SOILS: '<b>Séalaíocht ithreach</b> - An próiseas ina gclúdaítear ithir le foirgnimh nó ábhair shaorga.',
        DEGRADATION: '<b>Meath ithreach</b> - Próiseas diúltach a dhéantar níos measa go minic mar gheall ar ghníomhaíochtaí daonna (úsáid mhícheart ithreach agus cleachtais talmhaíochta, séalaíocht ithreach).',
        LOSS_OF_ORGANIC_MATTER: '<b>Cailliúint Ábhair Orgánaigh Ithreach</b> - Laghduithe ar ábhar orgánach i gciseal amháin nó níos mó den ithir.',
        PH: '<b>Aigéadú</b> - An próiseas ina n-ardaíonn tiúchan na n-ian hidrigin san ithir de réir a chéile.',
        BIODIVERSITY: '<b>Bithéagsúlacht</b> - An éagsúlacht i measc orgánaigh bheo ó gach foinse.'
    },
    pointStatus: {
        status: 'Stádas',
        PENDING: 'Ag fanacht le fíorú',
        ACCEPTED: 'Glactha',
        REJECTED: 'Diúltaithe'
    },
    login: 'Logáil isteach',
    logout: 'Logáil amach',
    register: 'Cláraigh',
    profile: 'Próifíl',
    filters: 'Scagairí',
    other: 'Eile',
    filtersDescription: 'Roghnaigh na catagóirí pointí ar mhaith leat a fheiceáil ar an léarscáil',
    close: 'Dún',
    cancel: 'Cealaigh',
    back: 'Ar ais',
    next: 'Ar aghaidh',
    continue: 'Lean ar aghaidh',
    skip: 'Scipeáil',
    addPoint: 'Cuir pointe leis',
    clear: 'Glan',
    remove: 'Bain',
    apply: 'Cuir i bhfeidhm',
    categories: 'Catagóirí',
    pressToAddPoint: 'Brúigh agus coinnigh chun tuairisc a chur leis',
    addPointHere: 'Cuir pointe leis ag mo shuíomh',
    seeMore: 'Féach níos mó',
    notAuthenticatedModal: {
        title: 'Ní féidir ach le húsáideoirí cláraithe tuairisc a chur leis',
        message: 'Logáil isteach chun leanúint ar aghaidh'
    },
    addPointForm: {
        chooseCategory: {
            title: 'Roghnaigh catagóir',
            description: 'Líon suirbhé gearr agus cuir pointe leis ar an léarscáil'
        },
        affectedArea: {
            title: 'Limistéar buailte',
            placeholder: 'Roghnaigh ga an limistéir'
        },
        addPhoto: {
            title: 'Cuir grianghraf leis',
            takePhoto: 'Tóg grianghraf',
            or: 'nó',
            chooseFromGallery: 'Roghnaigh ón nGailearaí'
        },
        description: {
            title: 'Déan cur síos ar an áit',
            placeName: {
                label: 'Ainm an ionaid',
                placeholder: 'm.sh., Páirc Shráid Kościuszko'
            },
            problemDescription: {
                label: 'Cur síos ar an bhfadhb',
                placeholder: ''
            }
        },
        solution: {
            title: 'Cúis fhéideartha na faidhbe'
        },
        successMessage: 'D’éirigh leat! Seoladh an tuairisc le haghaidh fíoraithe',
        errorMessage: 'Ó thiarna! Tharla earráid. Bain triail eile as'
    },
    pointDetails: {
        title: 'Sonraí an phointe',
        category: 'Catagóir',
        placeName: 'Ainm an ionaid',
        affectedArea: 'Ga na faidhbe',
        problemDescription: 'Cur síos ar an bhfadhb',
        problemSolution: 'Cúis fhéideartha na faidhbe',
        reportDate: 'Dáta na tuairisce',
        photo: 'Grianghraf'
    },
    userProfile: {
        title: 'Próifíl an úsáideora',
        appLanguage: 'Teanga an aip',
        manageAccount: 'Bainistigh an cuntas',
        logout: 'Logáil amach',
        removeAccount: 'Bain an cuntas',
        pts: 'PTS',
        deleteAccountPopup: {
            button: 'Bain an cuntas',
            cancel: 'Cealaigh',
            firstConfirmation: {
                title: 'Bain an cuntas',
                description: 'An bhfuil tú cinnte gur mian leat do chuntas a bhaint? Caillfear do shonraí go léir agus ní bheidh tú in ann iad a chur ar ais.'
            },
            secondConfirmation: {
                title: 'An bhfuil tú cinnte gur mian leat do chuntas a bhaint?',
                description: 'NÍ FÉIDIR AN GNÍOMH SEO A CHEALÚ.'
            }
        }
    },
    settings: {
        title: 'Socruithe',
        appLanguage: 'Teanga an aip',
        appVersion: 'Leagan an aip',
        howToUse: 'Conas an aip a úsáid',
        aboutSoils: 'Maidir le catagóirí ithreach',
        privacyPolicy: 'Polasaí príobháideachais'
    },
    pointsList: {
        title: 'Pointí curtha leis',
        noPoints: 'Níor cuireadh aon phointí leis.',
        unauthorized: 'Logáil isteach chun pointí curtha leis a fheiceáil.'
    },
    noPermissions: {
        library: {
            title: 'Ní féidir linn rochtain a fháil ar do ghrianghraif',
            description: 'Tabhair cead rochtana do do ghrianghraif sna socruithe.'
        },
        camera: {
            title: 'Ní féidir linn rochtain a fháil ar do cheamara',
            description: 'Tabhair cead rochtana do do cheamara sna socruithe.'
        },
        cancel: 'Cealaigh',
        openSettings: 'Oscail na socruithe'
    },
    pointManagement: {
        title: 'Bainistíocht Pointí',
        generateReport: 'Gineadh tuarascáil',
        pointsToApprove: 'Pointí le formheas',
        approvedPoints: 'Pointí',
        pointId: 'Aitheantas an phointe',
        pointName: 'Ainm an phointe',
        dateFrom: 'Dáta ón',
        dateTo: 'Dáta go',
        pointType: 'Cineál pointe',
        approve: 'Formheas',
        delete: 'Scrios',
        noData: 'Níl aon sonraí le taispeáint',
        download: 'Íoslódáil'
    },
    userManagement: {
        title: 'Bainistíocht Úsáideoirí',
        searchUser: 'Cuardaigh úsáideoir',
        deleteUser: 'Scrios úsáideoir',
        setPermissions: 'Socraigh ceadanna',
        confirmDeleteMessage: 'An bhfuil tú cinnte gur mian leat cuntas an úsáideora seo agus a iontrálacha go léir a scriosadh?',
        cancel: 'Cealaigh',
        confirm: 'Scrios an cuntas',
        noUsers: 'Níl aon úsáideoirí le taispeáint'
    },
    onboarding: {
        goToTheAppButton: 'Téigh chuig an aip',
        welcome: {
            title: 'Fáilte chuig\nLOESS Soil Map!',
            description: 'Uirlis deartha chun ithir i riocht míshláintiúil a thuairisciú'
        },
        instruction: {
            title: 'Conas ár n-uirlis a úsáid?',
            step1: {
                title: 'Aimsigh ithir nach bhfuil sláintiúil',
                description: 'Is féidir leat samplaí a sholáthraíonn ár bhfoireann a úsáid chun a chinneadh cén cineál ithreach atá agat.'
            },
            step2: {
                title: 'Cuir tuairisc leis san áit suite',
                description: 'Cuir isteach gach eolas a bhailigh tú ar mhaithe le cáilíocht na tuairisce, a chabhróidh le taighdeoirí an fhadhb a réiteach.'
            },
            step3: {
                title: 'Fan ar dhearbhú',
                description: 'Ní mór gach tuairisc a fhíorú ag ár bhfoireann chun ábhar díobhálach a sheachaint.'
            }
        },
        aboutSoils: {
            title: 'Maidir le hithreacha',
            description: 'Cliceáil ar chatagóir ithreach chun eolas a fheiceáil. Tá sé seo ar fáil freisin i rannóg na socruithe san aip.'
        }
    },
    problemCause: {
        lackOfRainfall: 'Easpa báistí',
        highTemperatures: 'Teochtaí arda',
        poorSoilStructure: 'Struchtúr bocht na hithreach',
        overuseOfWaterResources: 'Ró-úsáid acmhainní uisce',
        deforestation: 'Dífhoraoisiú',
        climateChange: 'Athrú aeráide',
        overgrazing: 'Ró-innilt',
        other: 'Eile',
        heavyRainfall: 'Báisteach throm',
        poorDrainageSystems: 'Córais draenála bochta',
        highWaterTable: 'Tábla ard uisce',
        overIrrigation: 'Ró-uisceú',
        soilCompaction: 'Comhbhrúithú ithreach',
        urbanization: 'Urbánú',
        flooding: 'Tuilte',
        windErosion: 'Creimeadh gaoithe',
        waterErosion: 'Creimeadh uisce',
        humanActivity: 'Gníomhaíocht dhaonna',
        gullyErosion: 'Creimeadh gúláin',
        sheetErosion: 'Creimeadh bileog',
        rillErosion: 'Creimeadh rille',
        agriculturalPractices: 'Cleachtais talmhaíochta',
        industrialActivities: 'Gníomhaíochtaí tionsclaíocha',
        pavingAndConcreting: 'Pábháil agus coincréit',
        naturalProcesses: 'Próisis nádúrtha',
        erosion: 'Creimeadh',
        contamination: 'Truailliú',
        lossOfNutrients: 'Caillteanas cothaithigh',
        overuseOfSoil: 'Ró-úsáid ithreach',
        intensiveAgriculture: 'Talmhaíocht dhian',
        soilErosion: 'Creimeadh ithreach',
        poorLandManagement: 'Drochbhainistiú talún',
        acidic: 'Aigéadach',
        slightlyAcidic: 'Beagán aigéadach',
        neutral: 'Neodrach',
        slightlyAlkaline: 'Beagán alcaileach',
        alkaline: 'Alcaileach',
        notSure: 'Níl cinnte',
        pollution: 'Truailliú',
        naturalSoilConditions: 'Coinníollacha nádúrtha ithreach'
    },
    codeRepository: 'Taisclann cód',
    allRightsReserved: 'Gach ceart ar cosaint',
    shapeTheFuture: 'Cruthaigh Todhchaí Oideachas na hIthreach.',
    togetherWeMap: 'Le chéile, mapálaimid, nascann muid, agus múinimid chun litearthacht ithreach a chothú, ag cur feasachta, rannpháirtíochta agus cleachtais inbhuanaithe chun cinn.',
    exploreTheMap: 'Iniúch an Léarscáil',
    learnMore: 'Foghlaim Tuilleadh',
    aboutTheProject: 'Maidir leis an Tionscadal',
    learnMoreAboutTheProject: 'Foghlaim níos mó faoin tionscadal',
    mappingSoilDegradation: 'Ag mapáil Dioghaltas Ithreach ar Do Mhéar',
    mappingSoilDegradationDescription1: 'Is ardán é LOESS Soil Map a thugann an pobal le chéile san iarracht ithir a chosaint. Trí úsáid a bhaint as léarscáileanna idirghníomhacha agus uirlisí geoshuímh, is féidir le húsáideoirí bunachar sonraí a thógáil go comhoibritheach trí fhaisnéis a chur leis faoi choinníollacha ithreach ina gceantair áitiúla.',
    mappingSoilDegradationDescription2: 'Tacaíonn na sonraí a bhailítear le taighdeoirí agus lucht déanta cinntí i gcinntí comhshaoil atá eolasach. Le foirm suirbhé shimplí agus comhéadan iomasach, is féidir le duine ar bith cur le tuiscint níos doimhne ar phróisis dioghaltais ithreach agus cuidiú go héifeachtach le hithir a chosaint.',
    sharedKnowledgeBase: 'Bunachar Eolais Comhroinnte le haghaidh Amárach Níos Fearr',
    sharedKnowledgeBaseDescription1: 'Bailíonn an tionscadal LOESS Soil Map, a chuirtear i gcrích faoi chlár taighde idirnáisiúnta LOESS, sonraí faoi chreimeadh ithreach, pH, agus taise, rud a chuireann ar chumas anailís dhomhanda. Mar thoradh air sin, faigheann úsáideoirí rochtain ar fhaisnéis chuimsitheach ar féidir leo a chur i bhfeidhm—ón taighde eolaíoch go tionscnaimh éiceolaíocha.',
    sharedKnowledgeBaseDescription2: 'Tá bunús éiceachórais sonraí comhsheasmhach lárnach dár réitigh chomhchoiteanna. Trí rannpháirtíocht an phobail agus teicneolaíochtaí nua-aimseartha, éiríonn LOESS Soil Map ina mhol lárnach d’athrú faisnéise, ag tacú le hiarrachtaí cosanta comhshaoil agus ag caomhnú leasanna na nglún atá le teacht.',
    howToUseTheApp: 'Conas an Aip a Úsáid',
    watchVideoDescription: 'Féach ar an bhfíseán gairid ar conas an uirlis léarscáilithe pobail a úsáid',
    appTutorial: 'Teagaisc Aip',
    dragMarkerMessage: 'Tarraing an marcóir sealadach chuig an suíomh atá uait',
    locationError: 'Theip ar do shuíomh a aimsiú, déan an leathanach a athnuachan le do thoil.',
    noPointsToApprove: 'Níl aon phointí le ceadú',
    noPointsFound: 'Ní bhfuarthas aon phointí',
    dateRange: 'Raon Dátaí',
    selectCategoryPlaceholder: 'Roghnaigh catagóir',
    getDataReport: 'Faigh tuarascáil sonraí',
    surveyStatusUpdated: 'Nuashonraíodh stádas an tsuirbhé',
    oopsSomethingWentWrong: 'Ouch! Tharla earráid. Déan iarracht arís níos déanaí le do thoil.',
    downloadReportFailed: 'Theip ar an tuarascáil a íoslódáil.',
    save: 'Sábháil',
    managePermissions: 'Bainistigh ceadanna',
    banUserTooltip: 'Cuir cosc ar úsáideoir. Coscfaidh sé seo orthu pointí a chur leis an léarscáil',
    usersCount: 'Líon na n-úsáideoirí:',
    userPermissionsUpdated: 'Nuashonraíodh ceadanna an úsáideora.',
    userStatusUpdated: 'Nuashonraíodh stádas an úsáideora.',
    pickDate: 'Roghnaigh dáta'
};
