module.exports = (sequelize, DataTypes, Model) => {

    class Sections extends Model {}

    Sections.init({
        // Model attributes are defined here
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: true
        },
        height: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        width: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        thk: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        mass: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        area: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        momentX: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        momentY: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        modulusX: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        modulusY: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'sections' // We need to choose the model name
      });
      
      return Sections;
}