class VerbHelp {

    constructor (wrapperId) {
        this.wrapperId = wrapperId;
        this.html = '';
    }

    updateHtml() {
        $('#' + this.wrapperId).html(this.html);
    }
    
    updateInfo (infinitive, translation, type) {
        //const verbTypeTitle = 'verbityyppi ' + (type || 'unknown');
        this.html = `<div class="d-flex p-4 justify-content-between align-middle">
                <h1 class="align-bottom"><i class="material-icons p-2 align-middle">help</i>help</h1>    
                <a id="closeIcon" class="close align-middle closebtn"><i  class="material-icons p-1 ">clear</i></a>
            </div>
    
        <div class="scroll p-4">
            <p>Here's a little bit of info to help you help you with this exercise.</p>
            <h2 id="infinitive">${infinitive}</h2>
            <p><i class="material-icons p-2 align-middle">translate</i><span id="translation">${translation}</span></p>
            <p id="verbTypeHelp">${this._getVerbHelp(type, infinitive)}</p>
            
        </div>`;
    }

    _getVerbHelp(type, infinitive) {
        //let infinitive_cap = this.infinitive.charAt(0).toUpperCase()
        
        switch (type) {
            case 1: 
                return `<h2>verbityypi i</h2>
                <p>endings: -Va/-Vä (V = any vowel)</p>
                <ul>
                    <li>In the present form, remove -a or -ä from the infinitive and add the stem.</li>
                    <li>This type of verb might undergo a strong > weak <i>consonnant gradation</i> on 1st & second person singular and plural.</li>
                </ul>`;
            case 2: 
                return `<h2>verbityypi ii</h2>
                <p>endings: -da/-dä</p>
                <ul>
                    <li>In the present form, remove -da or -dä from the infinitive and add the stem.</li>
                    <li>"nähdä", "tehdä" and "arvioida" are irregular.  "Nähdä" and "tehdä" follow the same conjugaison pattern as "lukea" (verbityypi i)</li>
                </ul>`;
            case 3:
                return `<h2>verbityypi iii</h2>
                <p>endings: -la/-lä, -na/-nä, -ra/-rä, -sta/-stä</p>
                <ul>
                    <li>In the present form, remove the assoiated stem from the infinitive and add the regular stem.</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                    <li>This type of verb might undergoe a weak > strong <i>consonnant gradation</i> on all the persons.  Passive form keeps the weak consonant.</li>
                    <li>Olla is an irregular verb.</li>
                </ul>`;
            case 4:
                return `<h2>verbityypi iv</h2>
                <p>endings: -Vta/-Vtä</p>
                <ul>
                    <li>In the present form, remove the -a/-ä from the infinitive and add the regular stem.</li>
                    <li>Sometimes verbs in -etä and -itä might be part of group 4, but they are likely part of group V or VI</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                    <li>This type of verb might undergoe a weak > strong <i>consonnant gradation</i> on all the persons.  Passive form keeps the weak consonant.</li>
                </ul>`;
            case 5:
                return `<h2>verbityypi v</h2>
                <p>endings: -ita/-itä</p>
                <ul>
                    <li>In the present form, remove the -a/-ä from the infinitive, add -se and the regular stem.</li>
                    <li>Sometimes verbs in -etä and -itä might be part of group 4, but they are likely part of group V or VI</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                </ul>`;
            case 6:
                return `<h2>verbityypi vi</h2>
                <p>endings: -eta/-etä</p>
                <ul>
                    <li>In the present form, remove the -a/-ä from the infinitive, change the -t to -ne, and add the regular stem.</li>
                    <li>Sometimes verbs in -etä and -itä might be part of group 4, but they are likely part of group V or VI</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                    <li>This type of verb might undergoe a weak > strong <i>consonnant gradation</i> on all the persons.  Passive form keeps the weak consonant.</li>
                </ul>`;
            default:
                return 'Anteeksi! We currently do not have information about how to conjugate this verb.';
        }
    }

}