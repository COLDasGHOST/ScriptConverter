function convertScript() {
    const inputScript = document.getElementById('inputScript').value;
    const outputScript = document.getElementById('outputScript');

    const convertedScript = convert(inputScript);
    outputScript.value = convertedScript;
}

function convert(a) {
    return a.replaceAll("SendPacket", "sendPacket")
        .replaceAll("SendPacketRaw", "sendPacketRaw")
        .replaceAll("SendVariant", "sendVariant")
        .replaceAll("GetLocal", "getLocal")
        .replaceAll("SleepMS", "sleep")
        .replaceAll("GetPlayerByNetID", "getPlayerByNetID")
        .replaceAll("OnTouch", "onTouch")
        .replaceAll("OnVarlist", "onVarlist")
        .replaceAll("GetWorldObject", "getWorldObject")
        .replaceAll("OnRawPacket", "onRawPacket")
        .replaceAll("LogToConsole", "logToConsole")
        .replaceAll("CheckTile", "checkTile")
        .replaceAll("GetTile", "getTile")
        .replaceAll("GetInventory", "getInventory")
        .replaceAll("GetItemByID", "getItemByID")
        .replaceAll("GetPlayerList", "getPlayerList")
        .replaceAll("Log", "doLog")
        .replaceAll("FindPath", "findPath");
}

function downloadOutput() {
    const outputScript = document.getElementById('outputScript').value;
    const currentDate = new Date();
    const fileName = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}.lua.txt`;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputScript));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}