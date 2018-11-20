class Verb {

    constructor(verbEntity) {

        this.infinitive = verbEntity.infinitive;
        this.translation = verbEntity.translation;
        this.type = verbEntity.type;

        this.conjugations = {
            "present": {
                "minä": verbEntity.present_fs,
                "sinä": verbEntity.present_ss,
                "hän": verbEntity.present_ts,
                "me": verbEntity.present_fp,
                "te": verbEntity.present_sp,
                "he": verbEntity.present_tp,
                "(passive)": verbEntity.present_p
            },
            "past": {
                "minä": verbEntity.past_fs,
                "sinä": verbEntity.past_ss,
                "hän": verbEntity.past_ts,
                "me": verbEntity.past_fp,
                "te": verbEntity.past_sp,
                "he": verbEntity.past_tp,
                "(passive)": verbEntity.past_p
            },
            "conditional": {
                "minä": verbEntity.cond_fs,
                "sinä": verbEntity.cond_ss,
                "hän": verbEntity.cond_ts,
                "me": verbEntity.cond_fp,
                "te": verbEntity.cond_sp,
                "he": verbEntity.cond_tp,
                "(passive)": verbEntity.cond_p
            }
        };
    }

    getInfinitive() {
        return this.infinitive;
    }

    getConjugation(tense, pronoun) {
        return this.conjugations[tense][pronoun];
    }

    getType()
    {
        return this.type;
    }

}

module.exports = Verb;