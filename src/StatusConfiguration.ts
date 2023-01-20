/**
 * Collection of status types supported by the plugin.
 */
export enum StatusType {
    TODO = 'TODO',
    DONE = 'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
    CANCELLED = 'CANCELLED',
    NON_TASK = 'NON_TASK',
    EMPTY = 'EMPTY',
}

/**
 * This is the object stored by the Obsidian configuration and used to create the status
 * objects for the session
 *
 * @export
 * @class StatusConfiguration
 */
export class StatusConfiguration {
    /**
     * The character used between the two square brackets in the markdown task.
     *
     * @type {string}
     * @memberof Status
     */
    public readonly symbol: string;

    /**
     * Returns the name of the status for display purposes.
     *
     * @type {string}
     * @memberof Status
     */
    public readonly name: string;

    /**
     * Returns the next status for a task when toggled.
     *
     * @type {string}
     * @memberof Status
     */
    public readonly nextStatusSymbol: string;

    /**
     * If true then it is registered as a command that the user can map to.
     *
     * @type {boolean}
     * @memberof Status
     */
    public readonly availableAsCommand: boolean;

    /**
     * Returns the status type. See {@link StatusType} for details.
     */
    public readonly type: StatusType;

    /**
     * Creates an instance of Status. The registry will be added later in the case
     * of the default statuses.
     *
     * @param {string} indicator
     * @param {string} name
     * @param {Status} nextStatusIndicator
     * @param {boolean} availableAsCommand
     * @param {StatusType} type
     * @memberof Status
     */
    constructor(
        indicator: string,
        name: string,
        nextStatusIndicator: string,
        availableAsCommand: boolean,
        type: StatusType = StatusType.TODO, // TODO Remove default value
    ) {
        this.symbol = indicator;
        this.name = name;
        this.nextStatusSymbol = nextStatusIndicator;
        this.availableAsCommand = availableAsCommand;
        this.type = type;
    }
}
