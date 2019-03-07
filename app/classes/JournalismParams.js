import Params from './Params';

export default class JournalismParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params);

    this.paramNames = ['publication', 'headline'];
    this.lastHeadline = prevProps
      && prevProps.match.params.headline;
    this.lastPublication = prevProps
      && prevProps.match.params.publication;

    this._actualNumber = this.paramNames.filter(
      p => this[p] !== false
    ).length;
  }

  get publication() {
    return this._validateParam(
      this._one,
      'publication',
      'text'
    );
  }

  get headline() {
    return this._validateParam(
      this._two,
      'headline',
      'text'
    );
  }

  publicationToIndex() {
    if (!this.publication) return -1;
    return this._oneToIndex();
  }

  headlineToIndex() {
    if (!this.headline) return -1;
    return this._twoToIndex();
  }

  get firstArticleToMatchPublication() {
    const headlineParamIsUndefined = this._two === undefined;

    if (
      this.publication
      && headlineParamIsUndefined
    ) {
      const firstHedToMatchPublication = this._searchData.find(
        a => this._normalizeParam(
          a.attributes.publication
        ) === this.publication
      ).attributes.headline;

      return this._searchData.findIndex(
        a => a.attributes.headline === firstHedToMatchPublication
      );
    }

    return -1;
  }
}
