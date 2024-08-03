
export interface IDataAccessObject<T> {
    /**
     * Return the Business Layer class
     */
    convertToBusinessClass(): void;
}
